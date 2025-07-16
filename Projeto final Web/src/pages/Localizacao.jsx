import React from 'react';

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

export default function Localizacao() {
  return (
    <FadeInSection>
      <div className="page-container">
        <div className="location-container">
          <h2>Nossa Localização</h2>
          <p>Venha nos visitar! Estamos localizados no coração de Cruz, prontos para recebê-lo.</p>
          <div className="address-box">
            <p><strong>Endereço:</strong> Travessa Duca Silveira, 84 - Sala 103 - Centro, Cruz - CE.</p>
            <p><strong>Atendimento:</strong> Presencial com hora marcada e suporte online para todo o Brasil.</p>
          </div>
          <div className="map-container">
            <iframe
              title="Mapa da Empresa"
              src="https://www.google.com/maps?q=Travessa+Duca+Silveira,+84+-+Centro,+Cruz+-+CE&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}
