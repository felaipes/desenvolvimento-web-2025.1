
async function carregar() {
  const res = await fetch('https://covid19-brazil-api.vercel.app/api/report/v1');
  const json = await res.json();
  const dados = json.data;

  const tbody = document.querySelector('#tabela tbody');
  let somaCasos=0, somaSus=0, somaOb=0;

  dados.forEach(e => {
    somaCasos += e.cases;
    somaSus += e.suspects;
    somaOb += e.deaths;
  });

  const n = dados.length;
  const mediaCasos = somaCasos/n, mediaSus = somaSus/n, mediaOb = somaOb/n;

  let maiorRatio = -1, menorRatio = Infinity;
  let estadoMaior='', estadoMenor='';

  dados.forEach(e => {
    const ratio = e.cases / (e.deaths || 1);
    if(ratio > maiorRatio){ maiorRatio = ratio; estadoMaior = e.state; }
    if(ratio < menorRatio){ menorRatio = ratio; estadoMenor = e.state; }
  });

  dados.forEach(e => {
    const tr = document.createElement('tr');
    if(e.deaths > mediaOb) tr.classList.add('acima');
    tr.innerHTML = `
      <td>${e.state}</td>
      <td>${e.uf}</td>
      <td>${e.cases}</td>
      <td>${e.suspects}</td>
      <td>${e.deaths}</td>`;
    tbody.appendChild(tr);
  });

  document.getElementById('footer').innerHTML = `
    <tr>
      <td colspan="2">Médias</td>
      <td>${mediaCasos.toFixed(2)}</td>
      <td>${mediaSus.toFixed(2)}</td>
      <td>${mediaOb.toFixed(2)}</td>
    </tr>
    <tr>
      <td colspan="5">
        Maior relação Casos/Óbitos: <strong>${estadoMaior}</strong> (${maiorRatio.toFixed(2)}) | Menor relação: <strong>${estadoMenor}</strong> (${menorRatio.toFixed(2)})
      </td>
    </tr>`;
}

carregar();
