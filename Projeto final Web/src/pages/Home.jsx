import React from 'react';

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
    });

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


export default function Home() {
  return (
    <FadeInSection>
      <div className="home-container">
        <div className="home-texto">
          <h1>Muniz Assessoria Empresarial</h1>
          <p>
            Bem-vindo à <strong>Muniz Assessoria Empresarial</strong>, referência em serviços contábeis, fiscais e empresariais com atuação especializada no atendimento a micro e pequenas empresas. Com uma abordagem moderna, transparente e centrada no cliente, oferecemos soluções que descomplicam a rotina fiscal e impulsionam o crescimento do seu negócio.
          </p>

          <p>
            Desde a nossa fundação, temos o compromisso de prestar um atendimento humanizado, ético e eficiente. Com sede em <strong>Cruz - CE</strong> e atendimento digital para todo o Brasil, auxiliamos nossos clientes com serviços que vão desde a abertura de empresas e planejamento tributário até consultorias personalizadas para tomada de decisão.
          </p>

          <p>
            Atuamos com forte presença na emissão e renovação de <strong>certificados digitais (A1)</strong>, garantindo segurança e agilidade nos processos digitais da sua empresa. Também oferecemos suporte completo nas áreas trabalhista, fiscal, contábil e previdenciária.
          </p>

          <p>
            Acreditamos que a contabilidade vai muito além do cumprimento de obrigações. É uma ferramenta estratégica para quem deseja empreender com segurança, reduzir custos e tomar decisões com base em dados concretos.
          </p>

          <p>
            Seja você um MEI, uma empresa em crescimento ou alguém em busca de atendimento de qualidade, a Muniz está pronta para te atender com atenção, profissionalismo e excelência.
          </p>

          <p className="home-final-phrase"><strong>Conte com a gente. Sua empresa nas mãos certas.</strong></p>
        </div>
      </div>
    </FadeInSection>
  )
}
