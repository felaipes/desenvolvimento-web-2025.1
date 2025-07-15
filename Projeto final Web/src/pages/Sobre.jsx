import homem from '../assets/muniz.png';
export default function Sobre() {
  return (
    <section className="sobre-nos">
      <div className="sobre-container">
        <div className="sobre-imagem">
          <img className= "sobre-imagem" src={homem}alt="Representante da empresa" />
          <div className="circulo" />
        </div>
        <div className="sobre-texto">
          <h3>Sobre Nós</h3>
          <h1>Somos comprometidos com excelência na oferta de soluções contábeis.</h1>
          <p>
            Com anos de experiência no mercado, oferecemos soluções personalizadas para empresas de todos os portes,
            ajudando nossos clientes a alcançar suas metas financeiras e a manter a conformidade com a legislação vigente.
          </p>
          <ul>
            <li><strong> Equipe Qualificada:</strong> Profissionais capacitados e atualizados, prontos para oferecer as melhores soluções contábeis.</li>
            <li><strong> Transparência e Confiabilidade:</strong> Atuação com ética e clareza nas informações fornecidas.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
