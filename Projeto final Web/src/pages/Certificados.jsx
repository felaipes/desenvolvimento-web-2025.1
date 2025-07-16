import React from 'react';

export default function Certificados() {
 return (
   
        <div className="form-page-container">
            <div className="form-container">
                <h2>Solicitação de Certificado Digital</h2>
                <p>Preencha o formulário abaixo para solicitar o seu certificado digital. Entraremos em contato em breve.</p>
                <form>
                    <div className="form-group">
                        <label>Nome completo:</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" required />
                    </div>
                    <div className="form-group">
                        <label>Telefone:</label>
                        <input type="tel" required />
                    </div>
                    <div className="form-group">
                        <label>Tipo de Certificado:</label>
                        <select required>
                            <option value="">Selecione o tipo</option>
                            <option value="e-CPF A1">e-CPF A1</option>
                            <option value="e-CPF A3">e-CPF A3</option>
                            <option value="e-CNPJ A1">e-CNPJ A1</option>
                            <option value="e-CNPJ A3">e-CNPJ A3</option>
                            <option value="NF-e">NF-e</option>
                        </select>
                    </div>
                    <button type="submit">Solicitar Contato</button>
                </form>
            </div>
        </div>
 );
}
