import React from 'react'
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Noticias from "./pages/Noticias";
import Certificados from './pages/Certificados'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Empresa from './pages/Empresa'
import Localizacao from './pages/Localizacao'
import Contato from './pages/Contato'
import logo from './assets/logo.png'

export default function App() {
  return (
    <Router>
        <header style={{
          background: 'rgba(0, 31, 78, 0.60)',  
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          color: 'white',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)'
}}>

        <img src={logo} alt="Logo Muniz" style={{ height: '50px' }} />
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/localizacao" element={<Localizacao />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <footer style={{
  backgroundColor: '#001f4e',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  marginTop: '2rem'
}}>
  <p>© Muniz Assessoria Empresarial</p>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '24px' }}>
    <a href="https://wa.me/5588999164850" target="_blank" rel="noreferrer">
      <FaWhatsapp style={{ color: '#25D366' }} />
    </a>
    <a href="mailto:douglascmuniz@gmail.com" target="_blank" rel="noreferrer">
      <FaEnvelope style={{ color: '#ffffff' }} />
    </a>
    <a href="https://instagram.com/muniz.as" target="_blank" rel="noreferrer">
      <FaInstagram style={{ color: '#C13584' }} />
    </a>
  </div>
</footer>
    </Router>
  )
}