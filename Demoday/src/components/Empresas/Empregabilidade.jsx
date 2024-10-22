import React, { useState } from 'react';
import '../Styles/Empregabilidade.css';

function Empregabilidade() {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    comoConheceu: '',
    mensagem: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Formulário enviado com sucesso!');
    setFormData({

      nome: '',
      email: '',
      telefone: '',
      comoConheceu: '',
      mensagem: ''
    });
  };

  return (
    <section className='section_fundo'>
      <section className="form-section">
        <h1 className='titulo-form'>Faça seu cadastro</h1>
        <p className='paragrafo-form'>
          Envie uma mensagem e entraremos em contato para ajudar a encontrar o emprego que mais combina com seu perfil e habilidades.
        </p>
        <p className="alert">
          No momento atuamos apenas na grande São Paulo
        </p>
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="comoConheceu">Como conheceu a Abraços?</label>
            <input
              type="text"
              id="comoConheceu"
              name="comoConheceu"
              value={formData.comoConheceu}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              value={formData.mensagem}
              onChange={handleChange}

            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Enviar</button>
        </form>
      </section>
    </section>
  );
}

export default Empregabilidade;