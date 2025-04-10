import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

// Importez une image pour la bannière (ou utilisez une URL)
import bannerImage from '/Applications/XAMPP/xamppfiles/htdocs/projetdesession/projetdesession/src/code.jpg'; 

function Home() {
  // Vous pourriez récupérer l'état de connexion ici si nécessaire pour afficher/masquer le prompt
  // const currentUser = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="home-container container mt-4 mb-5"> {/* Utilise container Bootstrap + marges */}

      {/* Section Bannière */}
      <section className="home-banner shadow-sm"> {/* Ajout d'une légère ombre */}
        <img src={bannerImage} alt="Bannière Code3737" className="banner-image" />
        <div className="banner-text">
          <h2>Bienvenue chez Code3737</h2>
          <p>Votre tremplin vers une carrière réussie dans le développement web et mobile.</p>
        </div>
      </section>

      {/* Section Aperçu du Programme */}
      <section className="program-preview-section text-center p-4 p-md-5 mb-5 bg-light rounded shadow-sm">
        <h2 className="mb-4">Découvrez Notre Programme Intensif</h2>
        <p className="lead mb-4">
          Acquérez les compétences les plus demandées en développement Full-Stack et lancez votre carrière tech.
        </p>
        <div className="row justify-content-center key-features mb-4">
          {/* Feature 1 */}
          <div className="col-md-4 mb-3">
            <div className="feature-item p-3">
              <i className="fas fa-laptop-code fa-3x text-primary mb-3"></i> {/* Icône */}
              <h4 className="h5">Frontend Moderne</h4>
              <p>Maîtrisez HTML, CSS, JavaScript et React pour créer des interfaces utilisateur interactives.</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="col-md-4 mb-3">
            <div className="feature-item p-3">
              <i className="fas fa-server fa-3x text-primary mb-3"></i> {/* Icône */}
              <h4 className="h5">Backend Robuste</h4>
              <p>Apprenez Node.js, Express et les bases de données (SQL/NoSQL) pour construire des APIs performantes.</p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="col-md-4 mb-3">
            <div className="feature-item p-3">
              <i className="fas fa-briefcase fa-3x text-primary mb-3"></i> {/* Icône */}
              <h4 className="h5">Prêt pour l'Emploi</h4>
              <p>Développez un portfolio solide et bénéficiez d'un accompagnement carrière personnalisé.</p>
            </div>
          </div>
        </div>
        <Link to="/programme" className="btn btn-primary btn-lg">
          Voir le Programme Complet <i className="fas fa-arrow-right ms-2"></i>
        </Link>
      </section>

      {/* Section "À propos" ou autre contenu */}
      <section className="home-about-section mb-5">
        <h3>Qui Sommes-Nous ?</h3>
        <p>
          Code3737 est plus qu'une simple formation ; c'est une communauté dédiée à former la prochaine génération de développeurs talentueux. Nous combinons une pédagogie axée sur la pratique avec un mentorat de qualité pour assurer votre succès.
        </p>
        {/* Ajoutez plus de contenu ici si nécessaire */}
      </section>

      {/* Message invitant à se connecter (optionnel, dépend si l'utilisateur est connecté) */}
      {/* {!currentUser && (
        <div className="login-prompt">
          Déjà membre ? <Link to="/login">Connectez-vous</Link> pour accéder à votre espace.
        </div>
      )} */}

    </div>
  );
}

export default Home;