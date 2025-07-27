import React from 'react';

export default function Servicos() {

  return (
    <div className="page-container">
      <div className="services-container">
        <h2>Nossos Serviços</h2>
        <p>Oferecemos um portfólio completo de soluções para garantir a saúde financeira e o crescimento da sua empresa.</p>
        
        <ul className="services-list">
          <li>
            <h3>Abertura e Regularização de Empresas</h3>
            <p>Cuidamos de toda a burocracia para que você possa focar no que realmente importa: seu negócio.</p>
          </li>
          <li>
            <h3>Contabilidade Completa</h3>
            <p>Escrituração contábil e fiscal para MEI, Simples Nacional e Lucro Presumido, garantindo conformidade e tranquilidade.</p>
          </li>
          <li>
            <h3>Departamento Pessoal</h3>
            <p>Gestão de folha de pagamento, pró-labore, e todas as obrigações trabalhistas e previdenciárias.</p>
          </li>
          <li>
            <h3>Planejamento Tributário</h3>
            <p>Análise e estratégia para otimizar sua carga tributária e maximizar seus lucros de forma legal.</p>
          </li>
        </ul>
      </div>
    </div>
  );
  
}
