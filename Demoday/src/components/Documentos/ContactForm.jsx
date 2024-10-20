import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio de formulário aqui
    console.log('Form data: ', formData);
  };

  return (
    <section className="contact-section">
      <h2>Entre em contato com a regularização:</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Mensagem"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;