// src/Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Importer le CSS

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire (ex: appel API)
    console.log('Formulaire de contact soumis:', formData);
    alert('Merci pour votre message !');
    setFormData({ name: '', email: '', message: '' }); // Réinitialiser
  };

  return (
    <div className="page contact-page">
      <h1>Nous Joindre</h1>
      <p>Utilisez le formulaire ci-dessous pour nous contacter.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="contact-submit-btn">Envoyer le Message</button>
      </form>

      <div className="contact-info">
        <h2>Autres moyens de contact</h2>
        <p><strong>Adresse :</strong> 123 Rue Fictive, Montreal, Canada</p>
        <p><strong>Téléphone :</strong> +1 234 567 890</p>
        <p><strong>Email :</strong> info@code3737.com</p>
      </div>
    </div>
  );
}

export default Contact;