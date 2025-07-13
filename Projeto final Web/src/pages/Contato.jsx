import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'

export default function Contato() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Entre em Contato</h2>

      <p>
        <a href="https://wa.me/5588999164850" target="_blank" rel="noreferrer">
          <FaWhatsapp style={{ color: '#25D366', fontSize: '24px', marginRight: '8px' }} />
          WhatsApp
        </a>
      </p>

      <p>
        <a href="mailto:douglascmuniz@gmail.com">
          <FaEnvelope style={{ color: '#333', fontSize: '24px', marginRight: '8px' }} />
          E-mail
        </a>
      </p>

      <p>
        <a href="https://instagram.com/muniz.as" target="_blank" rel="noreferrer">
          <FaInstagram style={{ color: '#C13584', fontSize: '24px', marginRight: '8px' }} />
          Instagram
        </a>
      </p>
    </div>
  )
}
