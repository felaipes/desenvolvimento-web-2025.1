const board = document.getElementById("gameBoard");
const totalPairs = 8;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matched = 0;

async function fetchPokemons() {
  const maxPokemon = 151;
  const indices = new Set();
  while (indices.size < totalPairs) {
    const rand = Math.floor(Math.random() * maxPokemon) + 1;
    indices.add(rand);
  }

  const pokemons = [];
  for (const id of indices) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    pokemons.push({
      name: data.name,
      image: data.sprites.front_default
    });
  }
  return pokemons;
}

function createShuffledDeck(pokemons) {
  const cards = [...pokemons, ...pokemons]
    .map(pokemon => ({
      ...pokemon,
      id: crypto.randomUUID()
    }))
    .sort(() => 0.5 - Math.random());
  return cards;
}

function renderCards(cards) {
  board.innerHTML = "";
  cards.forEach(card => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.dataset.name = card.name;
    div.dataset.id = card.id;

    div.innerHTML = `
      <div class="card-inner">
        <div class="card-front"></div>
        <div class="card-back">
          <img src="${card.image}" alt="${card.name}" width="80" height="80"/>
        </div>
      </div>
    `;

    div.addEventListener("click", handleFlip);
    board.appendChild(div);
  });
}

function handleFlip() {
  if (lockBoard || this.classList.contains("flipped")) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  if (firstCard.dataset.name === secondCard.dataset.name) {
    matched += 1;
    firstCard.removeEventListener("click", handleFlip);
    secondCard.removeEventListener("click", handleFlip);
    resetSelection();

    if (matched === totalPairs) {
      setTimeout(() => alert("Parabéns! Você encontrou todos os Pokémon!"), 500);
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetSelection();
    }, 1000);
  }
}

function resetSelection() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

async function startGame() {
  const pokemons = await fetchPokemons();
  const deck = createShuffledDeck(pokemons);
  renderCards(deck);
}

startGame();
