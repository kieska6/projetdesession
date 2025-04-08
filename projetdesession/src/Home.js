// src/Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; // Importez Link pour la navigation

// Optionnel : Si vous créez un fichier Home.css, importez-le
// import './Home.css';

function Home() {
  // État simple pour savoir si l'utilisateur est considéré comme connecté
  // (Basé sur la présence d'infos dans localStorage, par exemple)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Vérifier l'état de connexion au chargement du composant
  useEffect(() => {
    // Adaptez cette logique à la manière dont vous stockez l'état de connexion
    // Par exemple, vérifiez si un token ou un objet utilisateur existe
    const userLoggedIn = localStorage.getItem('authToken') || localStorage.getItem('user'); // Exemple
    if (userLoggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Le tableau vide assure que cela ne s'exécute qu'une fois au montage

  return (
    // Vous pouvez ajouter une classe CSS spécifique pour la page d'accueil si besoin
    <div id="home" className="page home-container" style={{ padding: '20px' }}> {/* Ajout d'un padding pour l'espacement */}

      {/* Section Bannière */}
      <div className="home-banner" style={{ position: 'relative', textAlign: 'center', color: 'white', marginBottom: '20px' }}>
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          // Il est préférable de gérer width/height via CSS pour la responsivité
          style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover', display: 'block', borderRadius: '8px' }}
          alt="Étudiants en programmation"
          className="banner-image"
        />
        {/* Superposition de texte simple */}
        <div className="banner-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '20px 40px', borderRadius: '8px' }}>
          <h2>Bienvenue chez Code3737</h2>
          <p>Découvrez notre programme de formation exceptionnel conçu pour vous préparer aux carrières technologiques de demain.</p>
        </div>
      </div>

      {/* Message de connexion conditionnel */}
      {!isLoggedIn && (
        <p className="login-prompt" style={{ textAlign: 'center', marginTop: '30px', fontSize: '1.1em' }}>
          Pour accéder à toutes les fonctionnalités, veuillez{' '}
          {/* Utilisation de Link pour naviguer vers la page de connexion */}
          <Link to="/login" style={{ color: '#007bff', textDecoration: 'underline' }}>
            vous connecter
          </Link>.
        </p>
      )}

      {/* Message de bienvenue si connecté */}
      {isLoggedIn && (
         <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '1.1em', color: 'green' }}>
           Vous êtes connecté ! Explorez les fonctionnalités disponibles via la navigation (si ajoutée).
         </p>
      )}

      {/* Ajoutez ici d'autres contenus statiques ou dynamiques pour la page d'accueil */}
      <div style={{ marginTop: '40px', padding: '20px', borderTop: '1px solid #eee' }}>
          <h3>À propos de notre formation</h3>
          <p>Nous proposons des cursus intensifs et pratiques pour maîtriser les technologies web et mobiles les plus demandées sur le marché.</p>
          {/* Plus de contenu... */}
      </div>

    </div>
  );
}

export default Home;