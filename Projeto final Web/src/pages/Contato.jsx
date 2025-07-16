import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

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

export default function Contato() {
  return (
    <FadeInSection>
      <div className="page-container">
        <div className="contact-container">
          <h2>Entre em Contato</h2>
          <p>Estamos prontos para ajudar. Escolha o seu canal de preferência ou envie-nos uma mensagem diretamente pelo formulário abaixo.</p>

          <div className="contact-links">
            <a href="https://wa.me/5588999164850" target="_blank" rel="noreferrer" className="contact-card whatsapp">
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
            <a href="mailto:douglascmuniz@gmail.com" className="contact-card email">
              <FaEnvelope />
              <span>E-mail</span>
            </a>
            <a href="https://instagram.com/muniz.as" target="_blank" rel="noreferrer" className="contact-card instagram">
              <FaInstagram />
              <span>Instagram</span>
            </a>
          </div>

          <div className="contact-form-section">
            <h3>Ou envie uma mensagem</h3>

            <form>
              <div className="form-group">
                <label>Seu Nome:</label>
                <input type="text" placeholder="Digite seu nome completo" required />
              </div>
              <div className="form-group">
                <label>Seu E-mail:</label>
                <input type="email" placeholder="exemplo@email.com" required />
              </div>
              <div className="form-group">
                <label>Sua Mensagem:</label>
                <textarea rows="6" placeholder="Escreva sua dúvida ou solicitação aqui..." required></textarea>
              </div>
              <button type="submit">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
