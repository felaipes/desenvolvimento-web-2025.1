export default function Localizacao() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Localização</h2>
      <p>Estamos localizados na Travessa Duca Silveira, 84 - Sala 103 - Centro, Cruz - CE.</p>
      <p>Atendimento presencial com hora marcada e suporte online para todo o Brasil.</p>

      <div style={{ marginTop: "1rem" }}>
        <iframe
          title="Mapa da Empresa"
          src="https://www.google.com/maps?q=Travessa+Duca+Silveira,+84+-+Centro,+Cruz+-+CE&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
