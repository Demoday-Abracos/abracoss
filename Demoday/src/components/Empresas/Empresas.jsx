import React, { useState } from 'react';
import '../Styles/Empregabilidade.css';
import botao from '../../../public/assets/images/botaovoltar.svg';
import { Link } from 'react-router-dom';

function Empregabilidade() {
  const [formData, setFormData] = useState({
    razaoSocial: '',
    nomeFantasia: '',
    email: '',
    telefone: '',
    endereco: '',
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
      razaoSocial: '',
      nomeFantasia: '',
      email: '',
      telefone: '',
      endereco: '',
      mensagem: ''
    });
  };

  return (
    <section className='section_fundo'>
      <div className='voltar_button'>
        <Link to="/">
          <img src={botao} alt="Voltar" />
        </Link>
      </div>

      <section className="form-section">
        <h1 className='titulo-form'>Faça seu cadastro</h1>
        <p className='paragrafo-form'>
          Envie suas informações e entraremos em contato.
        </p>
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="razaoSocial"></label>
            <input
              type="text"
              id="razaoSocial"
              name="razaoSocial"
              value={formData.razaoSocial}
              onChange={handleChange}
              placeholder="Razão Social*"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="nomeFantasia"></label>
            <input
              type="text"
              id="nomeFantasia"
              name="nomeFantasia"
              value={formData.nomeFantasia}
              onChange={handleChange}
              placeholder="Nome Fantasia*"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail*"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="telefone"></label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="Telefone*"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="endereco"></label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              placeholder="Endereço*"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="mensagem"></label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Mensagem"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Enviar</button>
        </form>
      </section>
    </section>
  );
}

export default Empregabilidade;
