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


export default function Empresa() {
  return (
    <FadeInSection>
      <div className="page-container">
        <div className="empresa-container">
          <h2>Conheça a Nossa Empresa</h2>
          <p className="empresa-intro">
              A Muniz Contabilidade é uma empresa especializada em soluções contábeis para pequenos negócios, com o objetivo de proporcionar crescimento e segurança financeira aos seus clientes. Formada por uma equipe de profissionais altamente qualificados e comprometidos, a Muniz Contabilidade busca oferecer um atendimento personalizado, alinhado às necessidades de cada empreendedor.
          </p>
          <p>
                 Com um atendimento atento e cuidadoso, a empresa combina o conhecimento técnico com o uso de tecnologia de ponta, garantindo processos ágeis, precisos e seguros. Sabemos que administrar um negócio envolve diversos desafios, e é por isso que nos dedicamos a cuidar de toda a parte contábil, permitindo que você se concentre no que realmente importa: o crescimento da sua empresa.
          </p>
          <p>
                 Nosso compromisso é ser mais do que um prestador de serviços contábeis – queremos ser parceiros na jornada do seu negócio, ajudando a otimizar resultados, reduzir custos e garantir que você esteja sempre em conformidade com a legislação vigente.
          </p>
          <p>
                 Na Muniz Contabilidade, o sucesso do seu negócio é a nossa missão!
          </p>

          <div className="mvv-section">
            <div className="mvv-card">
              <h3>Missão</h3>
              <p>"Oferecer soluções contábeis que vão além da geração de impostos, ajudando as empresas a crescerem de forma estratégica e sustentável."</p>
            </div>
            <div className="mvv-card">
              <h3>Visão</h3>
              <p>"Ser referência em contabilidade consultiva no Ceará, transformando a visão dos empresários sobre o papel da contabilidade no sucesso dos negócios."</p>
            </div>
          </div>

          <div className="valores-section">
            <h3>Nossos Valores</h3>
            <ul>
              <li><strong>Transformação:</strong> Acreditamos no poder da contabilidade para mudar e impulsionar negócios.</li>
              <li><strong>Excelência:</strong> Buscamos sempre qualidade e precisão nos nossos serviços.</li>
              <li><strong>Proatividade:</strong> Antecipamos as necessidades dos clientes com soluções eficazes.</li>
              <li><strong>Ética e Transparência:</strong> Atuamos com integridade e clareza em tudo que fazemos.</li>
              <li><strong>Inovação:</strong> Acompanhamos as mudanças do mercado para otimizar os processos.</li>
              <li><strong>Parceria:</strong> Trabalhamos junto aos nossos clientes para alcançar resultados duradouros.</li>
            </ul>
          </div>

        </div>
      </div>
    </FadeInSection>
  )
}
