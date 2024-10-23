import React, { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado', formData);
    // Aqui você pode adicionar a lógica para enviar o formulário
  };

  return (
    <>
      <h1 style={styles.title}>Entre em contato com a regularização:</h1>
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.jhow}>
            <div style={styles.inputGroup}>
              <label>Nome:</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label>E-mail:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>
          <div style={styles.inputGroup}>
            <label>Mensagem:</label>
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              style={styles.textarea}
            />
          </div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
}

const styles = {
  container: {
    backgroundColor: '#FF6600', // Cor de fundo laranja
    padding: '20px',
    borderRadius: '10px',
    width: '800px', // Aumentando a largura
    height: '650px', // Aumentando a altura
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative', // Para posicionamento do botão
  },
  title: {
    color: '#000000', // Cor do texto do título
    fontSize: '30px', // Tamanho da fonte
    marginBottom: '20px',
    textAlign: 'center', // Centralizando o título
    margin: '50px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    height: '100%', // Para garantir que o formulário use toda a altura
    paddingBottom: '50px', // Espaço para o botão na parte inferior
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  input: {
    padding: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '360px',
    margin: '10px 0px',
    
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '97%',
    height: '400px', // Aumentando ainda mais a altura da textarea
    margin: 'auto'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end', // Para alinhar o botão à direita
    position: 'absolute',
    bottom: '20px', // Distância do fundo
    right: '20px', // Distância da direita
  },
  button: {
    backgroundColor: '#0073e6', // Cor do botão
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  },
  jhow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
  
};

export default Formulario;
