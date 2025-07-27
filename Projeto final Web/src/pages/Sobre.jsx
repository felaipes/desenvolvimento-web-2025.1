import React from 'react';
import imagem from "../assets/Muniz.png.jpg";

const FadeInSection = ({ children, delay = 0 }) => {
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
      style={{ transitionDelay: `${delay}ms` }} 
    >
      {children}
    </div>
  );
};


export default function Sobre() {
  return (
    <section className="sobre-nos-overlay">
      <div className="sobre-imagem-background">
        <img src={imagem} alt="Fundo da seção Sobre Nós" />
      </div>
      
     
      <div className="sobre-texto-content-overlay">
        <FadeInSection delay={0}>
          <h3>Muniz Assesoria</h3>
        </FadeInSection>
        <FadeInSection delay={200}>
          <h1>Compromisso com a excelência em soluções contábeis.</h1>
        </FadeInSection>
        <FadeInSection delay={200}>
          <p>
            Com anos de experiência no mercado, oferecemos soluções personalizadas para empresas de todos os portes,
            ajudando nossos clientes a alcançar suas metas financeiras e a manter a conformidade com a legislação vigente.
          </p>
        </FadeInSection>
        <FadeInSection delay={800}>
          <ul>
            <li><strong>Equipe Qualificada:</strong> Profissionais capacitados e atualizados.</li>
            <li><strong>Transparência e Confiabilidade:</strong> Atuação com ética e clareza.</li>
            <li><strong>Inovação Contínua:</strong> Uso de tecnologia para otimizar processos.</li>
            <li><strong>Parceria Estratégica:</strong> Somos parceiros no crescimento do seu negócio.</li>
          </ul>
        </FadeInSection>
        <FadeInSection delay={400}>
          <p>
            Nossa abordagem é centrada no cliente, garantindo um atendimento próximo e dedicado a entender as particularidades de cada empresa.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
