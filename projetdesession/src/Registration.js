// src/Registration.js
import React, { useState } from 'react';
import './Registration.css'; // Importer le CSS

function Registration() {
  const [regData, setRegData] = useState({ fullName: '', email: '', program: 'webdev', comments: '' });

  const handleChange = (e) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi de la demande d'inscription
    console.log('Demande d\'inscription soumise:', regData);
    alert('Votre demande d\'inscription a été envoyée ! Nous vous contacterons bientôt.');
    setRegData({ fullName: '', email: '', program: 'webdev', comments: '' }); // Réinitialiser
  };

  return (
    <div className="page registration-page">
      <h1>Inscription au Programme</h1>
      <p>Remplissez ce formulaire pour manifester votre intérêt pour notre programme.</p>

      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Nom Complet</label>
          <input type="text" id="fullName" name="fullName" value={regData.fullName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={regData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="program">Programme souhaité</label>
          <select id="program" name="program" value={regData.program} onChange={handleChange}>
            <option value="webdev">Développement Web Full Stack</option>
            <option value="mobile">Développement Mobile</option>
            <option value="data">Science des Données</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Commentaires (optionnel)</label>
          <textarea id="comments" name="comments" rows="4" value={regData.comments} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="registration-submit-btn">Envoyer ma demande</button>
      </form>
    </div>
  );
}

export default Registration;