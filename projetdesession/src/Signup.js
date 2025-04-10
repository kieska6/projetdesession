// src/Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'; // Assurez-vous d'importer les styles

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // Pour afficher un message de succès
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    // Validation simple côté client
    if (!name || !email || !password) {
      setError('Veuillez remplir tous les champs.');
      setLoading(false);
      return;
    }
    // Vous pouvez ajouter une validation plus poussée (ex: force du mot de passe)

    // Appel à votre API PHP d'inscription
    fetch('http://localhost/projetdesession/projetdesession/api/signup.php', { // <-- !! METTEZ VOTRE URL CORRECTE !!
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }), // On n'envoie pas le rôle, il est déterminé côté serveur
    })
    .then(response => {
      // Vérifier si la réponse est OK (status 200-299)
      if (!response.ok) {
         return response.json().then(errData => {
           throw new Error(errData.message || `Erreur HTTP ${response.status}`);
         }).catch(() => {
           throw new Error(`Erreur HTTP ${response.status}`);
         });
      }
      return response.json();
    })
    .then(data => {
      setLoading(false);
      if (data.status === 'success') {
        // Inscription réussie !
        console.log('Signup successful:', data.message); // Le message peut contenir le rôle attribué
        setSuccess('Inscription réussie ! Vous allez être redirigé vers la page de connexion.');
        setError(''); // Effacer les erreurs précédentes

        // Rediriger vers la page de connexion après un court délai
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Délai de 2 secondes pour lire le message

      } else {
        // Afficher le message d'erreur du serveur
        setError(data.message || 'Échec de l\'inscription.');
        setSuccess('');
      }
    })
    .catch(error => {
      setLoading(false);
      console.error('Signup error:', error);
      setError(error.message || 'Une erreur est survenue lors de l\'inscription.');
      setSuccess('');
    });
  };

  return (
    // Appliquez vos classes CSS pour la mise en page (ex: signup-page-container)
    <div className="signup-page-container d-flex justify-content-center align-items-center vh-100">
      {/* Appliquez vos classes CSS pour la carte (ex: signup-auth-card) */}
      <div className="signup-auth-card bg-white p-4 rounded shadow-sm">
        <h2 className="text-center mb-4">Inscription</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          {/* Appliquez vos classes CSS pour les groupes de formulaire (ex: signup-form-group) */}
          <div className="signup-form-group mb-3">
            <label htmlFor="name">Nom complet</label>
            <input
              type="text"
              className="form-control" // Ou votre classe personnalisée
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="signup-form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control" // Ou votre classe personnalisée
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="signup-form-group mb-3">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              className="form-control" // Ou votre classe personnalisée
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          {/* Appliquez vos classes CSS pour les boutons (ex: signup-btn signup-btn-primary) */}
          <button type="submit" className="signup-btn signup-btn-primary w-100 mb-2" disabled={loading}>
            {loading ? 'Inscription en cours...' : 'S\'inscrire'}
          </button>
          <p className="text-center mt-3">
            Déjà un compte ? <Link to="/login">Connectez-vous</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;