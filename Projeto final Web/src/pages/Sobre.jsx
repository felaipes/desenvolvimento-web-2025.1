import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';


import './style.css';
import logo from './assets/logo.png';


import Home from './pages/Home';
 import Sobre from './pages/Sobre';
 import Servicos from './pages/Servicos';
 import Empresa from './pages/Empresa';
 import Noticias from './pages/Noticias';
 import Certificados from './pages/Certificados';
 import Localizacao from './pages/Localizacao';
 import Contato from './pages/Contato';



export const FadeInSection = ({ children }) => {
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


const Home = () => (
  <div className="home-container">
    <FadeInSection>
      <div className="home-texto">
        <h1>Soluções que Impulsionam o seu Negócio</h1>
        <p>Na <strong>Muniz Assessoria</strong>, transformamos desafios em oportunidades com estratégias contábeis e empresariais personalizadas.</p>
        <p>Vamos crescer juntos?</p>
      </div>
    </FadeInSection>
  </div>
);
const Sobre = () => (
    <FadeInSection>
        <section className="sobre-nos">
            <div className="sobre-container">
                <img src="https://placehold.co/400x500/001f4e/ffffff?text=Muniz" alt="Equipe Muniz Assessoria" className="sobre-imagem" />
                <div className="sobre-texto">
                    <h3>Quem Somos</h3>
                    <h1>Excelência e Confiança</h1>
                    <p>Com anos de experiência, nossa missão é fornecer um serviço de excelência, pautado pela ética e compromisso.</p>
                    <ul>
                        <li>Consultoria Contábil e Fiscal</li>
                        <li>Planejamento Tributário</li>
                        <li>Abertura de Empresas</li>
                    </ul>
                </div>
            </div>
        </section>
    </FadeInSection>
);
const Certificados = () => <div style={{padding: '4rem 2rem'}}><FadeInSection><h1>Página de Certificados</h1></FadeInSection></div>;
const Servicos = () => <div style={{padding: '4rem 2rem'}}><FadeInSection><h1>Página de Serviços</h1></FadeInSection></div>;
const Empresa = () => <div style={{padding: '4rem 2rem'}}><FadeInSection><h1>Página da Empresa</h1></FadeInSection></div>;
const Noticias = () => <div style={{padding: '4rem 2rem'}}><FadeInSection><h1>Página de Notícias</h1></FadeInSection></div>;
const Localizacao = () => <div style={{padding: '4rem 2rem'}}><FadeInSection><h1>Página de Localização</h1></FadeInSection></div>;
const Contato = () => <div style={{padding: '4rem 2rem'}}><FadeInSection><h1>Página de Contato</h1></FadeInSection></div>;


// --- Componente que gerencia as rotas e transições ---
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={500}
        classNames="fade"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/certificados" element={<Certificados />} />
          <Route path="/localizacao" element={<Localizacao />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};


export default function App() {
  return (
    <Router>
      <header>
        <img src={logo} alt="Logo Muniz" style={{ height: '60px' }} />
        <nav>
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/empresa">Empresa</Link>
          <Link to="/noticias">Noticias</Link>
          <Link to="/certificados">Certificados</Link>
          <Link to="/localizacao">Localização</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </header>

      <main>
        <AnimatedRoutes />
      </main>

      <footer>
        <p>© Muniz Assessoria Empresarial</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '24px', marginTop: '0.5rem' }}>
          <a href="https://wa.me/5588999164850" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
            <FaWhatsapp />
          </a>
          <a href="mailto:douglascmuniz@gmail.com" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
            <FaEnvelope />
          </a>
          <a href="https://instagram.com/muniz.as" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
            <FaInstagram />
          </a>
        </div>
      </footer>
    </Router>
  );
}
