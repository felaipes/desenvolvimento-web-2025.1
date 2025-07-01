
async function carregarMundo() {
  const res = await fetch('https://covid19-brazil-api.vercel.app/api/report/v1/countries');
  const json = await res.json();
  const dados = json.data;
  const tbody = document.querySelector('#tabelaMundo tbody');

  dados.forEach(e => {
    const tr = document.createElement('tr');
    if(e.country === 'Brazil') tr.classList.add('brasil');
    tr.innerHTML = `
      <td>${e.country}</td>
      <td>${e.confirmed}</td>
      <td>${e.deaths}</td>`;
    tbody.appendChild(tr);
  });
}

carregarMundo();
