import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'; // useNavigate peut être utile
import './App.css';
import Login from './Login.js';
import Signup from './Signup.js';
import Home from './Home.js';
import Admin from './Admin.js';
import Etudiant from './Etudiant.js';
import Contact from './Contact.js';
import Program from './Program.js';
import Testimonials from './Testimonials.js';
import Registration from './Registration.js';
import Forum from './Forum.js';
import Calendar from './Calendar.js';
import Profile from './Profile.js';
import Alumni from './Alumni.js';
// Vous pourriez avoir besoin d'un composant NotFound pour la route '*'
// import NotFound from './NotFound.js';

// Composant interne pour gérer la logique de connexion/déconnexion dans le header
// Car on ne peut pas utiliser useNavigate directement dans la fonction App qui définit BrowserRouter
function AuthSection() {
  // Simuler un utilisateur connecté (à adapter selon votre logique d'authentification globale, ex: Context API)
  // Pour cet exemple, on simule un état local, mais idéalement, cet état serait partagé
  const [currentUser, setCurrentUser] = useState(null); // Mettez ici votre vraie logique d'état global
  const navigate = useNavigate();

  // Fonction de déconnexion
  const handleLogout = () => {
    setCurrentUser(null); // Mettez à jour l'état global ici
    alert('Déconnecté avec succès');
    navigate('/'); // Redirige vers l'accueil après déconnexion
  };

  // Fonction pour simuler la connexion (redirige vers la page de login)
  const handleLoginClick = () => {
    navigate('/login');
  };

   // Simulation de connexion pour test (à remplacer par la vraie logique)
   const simulateLogin = (role) => {
     setCurrentUser({ name: role === 'admin' ? 'Admin User' : 'Student User', role: role });
   };


  return (
    <div className="auth-section">
      {currentUser ? (
        <div className="user-info">
          <span>{currentUser.name}</span>
          {/* Assurez-vous que les classes CSS existent bien dans App.css */}
          <span className={`role-badge ${currentUser.role}-badge`}>
            {currentUser.role === 'admin' ? 'Admin' : 'Étudiant'}
          </span>
          <button className="btn btn-primary" onClick={handleLogout}>Déconnexion</button>
        </div>
      ) : (
        <>
          {/* Bouton qui redirige vers la page de login */}
          <button className="btn btn-primary" onClick={handleLoginClick}>
            Connexion
          </button>
           {/* Boutons de simulation (POUR TEST UNIQUEMENT, À SUPPRIMER PLUS TARD) */}
           <button onClick={() => simulateLogin('student')} style={{marginLeft: '5px'}}>Sim Login Étudiant</button>
           <button onClick={() => simulateLogin('admin')} style={{marginLeft: '5px'}}>Sim Login Admin</button>
        </>
      )}
    </div>
  );
}


function App() {
  // L'état currentUser devrait idéalement être géré globalement (Context API, Redux, Zustand...)
  // Pour l'instant, la logique est simulée dans AuthSection

  // Fonction pour déterminer si un lien doit être affiché (basé sur un état global simulé ou réel)
  // NOTE: Cette fonction dépendra de comment vous gérez l'état global `currentUser`
  const shouldShow = (section, user) => { // Prend l'utilisateur en argument
    if (!user) return false; // Si pas d'utilisateur, ne rien montrer de protégé
    if (section === 'admin') return user.role === 'admin';
    if (section === 'etudiant') return user.role === 'student'; // Pour les liens spécifiques étudiant
    if (section === 'auth') return true; // Pour les liens accessibles à tout utilisateur connecté
    return false;
  };

  // Récupérer l'état simulé (ou réel) pour l'utiliser dans les liens de navigation
  // Ceci est une simplification. Idéalement, vous liriez l'état depuis un contexte.
  const [simulatedUserForLinks, setSimulatedUserForLinks] = useState(null);
  // NOTE: Vous devrez connecter ceci à l'état réel de AuthSection ou à votre état global.


  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Code3737</h1>
          <nav>
            <ul>
              {/* Correction: Lien vers l'accueil doit être "/" */}
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/programme">Le Programme</Link></li>
              <li><Link to="/inscription">Inscription</Link></li>
              <li><Link to="/contact">Nous joindre</Link></li>
              <li><Link to="/temoignages">Témoignages</Link></li>
              <li><Link to="/alumni">Salle des Alumni</Link></li> {/* Alumni peut être public ou privé */}

              {/* Liens conditionnels basés sur l'utilisateur connecté */}
              {/* NOTE: `simulatedUserForLinks` doit refléter l'état réel */}
              {shouldShow('admin', simulatedUserForLinks) && <li><Link to="/admin">Administration</Link></li>}
              {shouldShow('etudiant', simulatedUserForLinks) && <li><Link to="/etudiant">Espace Étudiant</Link></li>}
              {shouldShow('auth', simulatedUserForLinks) && <li><Link to="/calendar">Calendrier scolaire</Link></li>}
              {shouldShow('auth', simulatedUserForLinks) && <li><Link to="/profile">Mon Profil</Link></li>}
              {shouldShow('auth', simulatedUserForLinks) && <li><Link to="/forum">Forum</Link></li>}
            </ul>
          </nav>
          {/* Utilisation du composant interne pour gérer la section auth */}
          {/* NOTE: Ce composant devrait idéalement lire/écrire dans un état global */}
          <AuthSection />
        </header>

        {/* Définition des routes */}
        <main className="container"> {/* Utiliser <main> pour le contenu principal */}
          <Routes>
            {/* Routes publiques */}
            <Route path="/" element={<Home />} />
            {/* Passer la fonction pour mettre à jour l'état global à Login/Signup */}
            <Route path="/login" element={<Login /* setGlobalUser={setSimulatedUserForLinks} */ />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/programme" element={<Program />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/temoignages" element={<Testimonials />} />
            <Route path="/inscription" element={<Registration />} />
            <Route path="/alumni" element={<Alumni />} />

            {/* Routes Protégées (Exemple conceptuel - nécessite une implémentation réelle) */}
            {/* Vous aurez besoin d'un composant <ProtectedRoute> pour gérer la redirection si non autorisé */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/etudiant" element={<Etudiant />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/calendrier" element={<Calendar />} />
            <Route path="/profil" element={<Profile />} />

            {/* Routes pour les pages légales (si vous les créez) */}
            {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
            {/* <Route path="/terms" element={<TermsOfService />} /> */}

            {/* Route pour page non trouvée */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>Code3737</h3>
              <p>Formation en développement web et mobile</p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Navigation</h4>
                <ul>
                  {/* CORRECTION: Utiliser Link pour la navigation interne */}
                  <li><Link to="/">Accueil</Link></li>
                  <li><Link to="/programme">Programme</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  {/* Ajoutez d'autres liens pertinents ici */}
                </ul>
              </div>

              <div className="footer-column">
                <h4>Légal</h4>
                <ul>
                  {/* CORRECTION: Utiliser Link si ce sont des pages internes */}
                  {/* Ou laisser <a> si ce sont des ancres sur la même page (peu probable) */}
                  <li><Link to="/privacy">Politique de confidentialité</Link></li>
                  <li><Link to="/terms">Conditions d'utilisation</Link></li>
                </ul>
              </div>
            </div>

            <div className="footer-social">
              <h4>Suivez-nous</h4>
              <div className="social-icons">
                {/* Les liens externes utilisent <a> avec target="_blank" */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Code3737. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;