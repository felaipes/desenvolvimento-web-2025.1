export default function Certificados() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Solicitação de Certificado Digital</h2>
      <form>
        <div><label>Nome completo:<br /><input type="text" required /></label></div><br />
        <div><label>Email:<br /><input type="email" required /></label></div><br />
        <div><label>Telefone:<br /><input type="tel" required /></label></div><br />
        <div>
          <label>Tipo de Certificado:<br />
            <select required>
              <option value="">Selecione</option>
              <option value="A1">A1</option>
            </select>
          </label>
        </div><br />
        <button type="submit">Solicitar Contato</button>
      </form>
    </div>
  )
}