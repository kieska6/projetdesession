// src/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Assurez-vous d'importer les styles

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Pour indiquer l'état de chargement
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(''); // Réinitialiser les erreurs
    setLoading(true); // Activer l'indicateur de chargement

    // Validation simple côté client
    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      setLoading(false);
      return;
    }

    // Appel à votre API PHP de connexion
    fetch('http://localhost/projetdesession/projetdesession/api/login.php', { // <-- !! METTEZ VOTRE URL CORRECTE !!
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => {
      // Vérifier si la réponse est OK (status 200-299)
      if (!response.ok) {
         // Essayer de lire le message d'erreur du serveur s'il y en a un
         return response.json().then(errData => {
           throw new Error(errData.message || `Erreur HTTP ${response.status}`);
         }).catch(() => {
           // Si le corps n'est pas JSON ou vide
           throw new Error(`Erreur HTTP ${response.status}`);
         });
      }
      return response.json(); // Convertir la réponse en JSON
    })
    .then(data => {
      setLoading(false); // Désactiver le chargement
      if (data.status === 'success' && data.user) {
        // Connexion réussie !
        console.log('Login successful:', data.user);

        // Stocker les informations utilisateur dans localStorage
        // JSON.stringify est nécessaire car localStorage ne stocke que des chaînes
        localStorage.setItem('user', JSON.stringify(data.user));

        // Optionnel: Mettre à jour un état global si vous en utilisez un
        // props.setGlobalUser(data.user);

        alert(`Connexion réussie ! Bienvenue ${data.user.name}. Votre rôle est : ${data.user.role}`);

        // Rediriger en fonction du rôle
        if (data.user.role === 'admin') {
          navigate('/admin'); // Rediriger vers le tableau de bord admin
        } else if (data.user.role === 'etudiant') {
          navigate('/etudiant'); // Rediriger vers le tableau de bord étudiant
        } else {
          navigate('/'); // Redirection par défaut si le rôle n'est pas géré
        }

      } else {
        // Afficher le message d'erreur du serveur
        setError(data.message || 'Échec de la connexion. Vérifiez vos identifiants.');
      }
    })
    .catch(error => {
      setLoading(false); // Désactiver le chargement en cas d'erreur réseau/autre
      console.error('Login error:', error);
      setError(error.message || 'Une erreur est survenue lors de la connexion.');
    });
  };

  return (
    // Appliquez vos classes CSS pour la mise en page (ex: login-page-container)
    <div className="login-page-container d-flex justify-content-center align-items-center vh-100">
      {/* Appliquez vos classes CSS pour la carte (ex: login-auth-card) */}
      <div className="login-auth-card bg-white p-4 rounded shadow-sm">
        <h2 className="text-center mb-4">Connexion</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          {/* Appliquez vos classes CSS pour les groupes de formulaire (ex: login-form-group) */}
          <div className="login-form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control" // Ou votre classe personnalisée
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading} // Désactiver pendant le chargement
            />
          </div>
          <div className="login-form-group mb-3">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              className="form-control" // Ou votre classe personnalisée
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading} // Désactiver pendant le chargement
            />
          </div>
          {/* Appliquez vos classes CSS pour les boutons (ex: login-btn login-btn-primary) */}
          <button type="submit" className="login-btn login-btn-primary w-100 mb-2" disabled={loading}>
            {loading ? 'Connexion en cours...' : 'Se connecter'}
          </button>
          <p className="text-center mt-3">
            Pas encore de compte ? <Link to="/signup">Inscrivez-vous</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;