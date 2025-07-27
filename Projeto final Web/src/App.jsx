import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

import './style.css';
import logo from './assets/logo.png';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Empresa from './pages/Empresa';
import Noticias from './pages/Noticias';
import Certificados from './pages/Certificados';
import Localizacao from './pages/Localizacao';
import Contato from './pages/Contato';

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
          <Route path="/home" element={<Home />} />
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
          <Link to="/home">Inicio</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/empresa">Empresa</Link>
          <Link to="/noticias">Cotações</Link>
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
