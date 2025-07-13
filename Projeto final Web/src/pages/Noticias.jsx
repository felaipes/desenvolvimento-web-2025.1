import { useEffect, useState } from 'react'

export default function Conteudos() {
  const [taxas, setTaxas] = useState([])
  const [moedas, setMoedas] = useState({})

  useEffect(() => {
    fetch("https://brasilapi.com.br/api/taxas/v1")
      .then(res => res.json())
      .then(data => {
        const filtradas = data.filter(t => ["Selic", "CDI", "IPCA"].includes(t.nome))
        setTaxas(filtradas)
      })

    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL")
      .then(res => res.json())
      .then(data => {
        setMoedas({
          USD: data.USDBRL,
          EUR: data.EURBRL,
          BTC: data.BTCBRL,
        })
      })
  }, [])

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Indicadores Econômicos</h2>
      <ul>
        {taxas.map(t => (
          <li key={t.nome}>{t.nome}: {t.valor} %</li>
        ))}
      </ul>

      <h2>Cotações de Moedas</h2>
      <ul>
        {Object.entries(moedas).map(([sigla, m]) => (
          <li key={sigla}>{sigla}: R$ {parseFloat(m.ask).toFixed(2)}</li>
        ))}
      </ul>
    </div>
  )
}