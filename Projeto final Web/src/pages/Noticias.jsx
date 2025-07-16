import React, { useEffect, useState } from 'react';

// O componente de animação foi movido para cá para resolver o erro de importação.
const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};


export default function Noticias() {
  const [taxas, setTaxas] = useState([]);
  const [moedas, setMoedas] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [taxasRes, moedasRes] = await Promise.all([
          fetch("https://brasilapi.com.br/api/taxas/v1"),
          fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL")
        ]);

        const taxasData = await taxasRes.json();
        const moedasData = await moedasRes.json();

        const filtradas = taxasData.filter(t => ["Selic", "CDI", "IPCA"].includes(t.nome));
        setTaxas(filtradas);

        setMoedas({
          USD: moedasData.USDBRL,
          EUR: moedasData.EURBRL,
          BTC: moedasData.BTCBRL,
        });
      } catch (error) {
        console.error("Erro ao buscar dados económicos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="page-container"><p>A carregar indicadores...</p></div>;
  }

  return (
    <FadeInSection>
      <div className="page-container">
        <div className="noticias-container">
          <h2>Indicadores Econômicos</h2>
          <p>Acompanhe os principais indicadores que influenciam o mercado e o seu negócio.</p>
          
          <table className="indicators-table">
            <thead>
              <tr>
                <th>Taxa</th>
                <th>Valor Anual</th>
              </tr>
            </thead>
            <tbody>
              {taxas.map(t => (
                <tr key={t.nome}>
                  <td>{t.nome}</td>
                  <td>{t.valor.toFixed(2)} %</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={{ marginTop: '3rem' }}>Cotações de Moedas</h2>
          <table className="indicators-table">
            <thead>
              <tr>
                <th>Moeda</th>
                <th>Valor de Venda</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(moedas).map(([sigla, m]) => (
                <tr key={sigla}>
                  <td>{m.name}</td>
                  <td>R$ {parseFloat(m.ask).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </FadeInSection>
  );
}
