import React, { useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

// Inicializa o EmailJS com seu User ID
emailjs.init('oKBLjstJAP59fIaLb');

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_9hxd6do'; // Substitua pelo seu Service ID do EmailJS
    const templateID = 'template_jiaqf8e'; // Substitua pelo seu Template ID do EmailJS

    emailjs.send(serviceID, templateID, formData)
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Inscrição realizada com sucesso! Um email de agradecimento foi enviado.');
        setFormData({ name: '', email: '' }); // Limpar o formulário após o envio
      })
      .catch((err: any) => {
        console.error('FAILED...', err);
        alert('Erro ao enviar email. Tente novamente.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Inscrever</button>
    </form>
  );
};

export default SignupForm;
