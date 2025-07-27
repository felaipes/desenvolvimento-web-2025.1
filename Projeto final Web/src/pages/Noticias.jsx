import React, { useEffect, useState } from 'react';

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

        const taxasPromise = fetch("/brasilapi/api/taxas/v1");
        const moedasPromise = fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/brl.json");

        const [taxasRes, moedasRes] = await Promise.all([taxasPromise, moedasPromise]);

        const taxasData = await taxasRes.json();
        const moedasData = await moedasRes.json();

        const filtradas = taxasData.filter(t => ["Selic", "CDI", "IPCA"].includes(t.nome));
        setTaxas(filtradas);
        const rates = moedasData.brl;
        setMoedas({
          USD: { 
            name: 'Dólar Americano/Real', 
            ask: (1 / rates.usd).toFixed(2) 
          },
          EUR: { 
            name: 'Euro/Real', 
            ask: (1 / rates.eur).toFixed(2) 
          },
          BTC: { 
            name: 'Bitcoin/Real',
            ask: (1 / rates.btc).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
          },
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
          <h2>Indicadores Económicos</h2>
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
          <p>Acompanhe as cotações das principais moedas em relação ao Real.</p>
          <table className="indicators-table">
            <thead>
              <tr>
                <th>Moeda</th>
                <th>Valor de Venda</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(moedas).map(([sigla, m]) => (
                m && m.name && m.ask ? (
                  <tr key={sigla}>
                    <td>{m.name}</td>
                    <td>R$ {m.ask}</td>
                  </tr>
                ) : null
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </FadeInSection>
  );
}
