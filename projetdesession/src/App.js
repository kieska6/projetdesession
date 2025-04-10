import React, { useState } from 'react';
import { useEffect } from 'react';
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

function NavigationBar({ currentUser, onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    if (onLogout) {
      onLogout(); // Appelle la fonction de déconnexion passée depuis App
    }
    navigate('/'); // Redirige vers l'accueil après déconnexion
  };

  return (
    <header>
      <h1>Code3737</h1>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/programme">Le Programme</Link></li>
          <li><Link to="/inscription">Inscription</Link></li>
          <li><Link to="/contact">Nous joindre</Link></li>
          <li><Link to="/temoignages">Témoignages</Link></li>
          <li><Link to="/alumni">Salle des Alumni</Link></li>

          {/* Liens conditionnels basés sur l'utilisateur connecté */}
          {currentUser && currentUser.role === 'admin' && <li><Link to="/admin">Administration</Link></li>}
          {currentUser && currentUser.role === 'etudiant' && <li><Link to="/etudiant">Espace Étudiant</Link></li>}
          {currentUser && <li><Link to="/calendar">Calendrier scolaire</Link></li>}
          {currentUser && <li><Link to="/profile">Mon Profil</Link></li>}
          {currentUser && <li><Link to="/forum">Forum</Link></li>}
        </ul>
      </nav>
      <div className="auth-section">
        {currentUser ? (
          <div className="user-info">
            <span>Bienvenue, {currentUser.name}</span>
            {/* Assurez-vous que les classes CSS existent (ex: admin-badge, student-badge) */}
            <span className={`role-badge ${currentUser.role}-badge`}>
              {currentUser.role === 'admin' ? 'Admin' : 'Étudiant'}
            </span>
            {/* Utiliser le bouton stylé de App.css ou Bootstrap */}
            <button className="btn btn-secondary ms-2" onClick={handleLogoutClick}>Déconnexion</button>
          </div>
        ) : (
          <>
            {/* Utiliser les boutons stylés */}
            <Link to="/login" className="btn btn-primary me-2">Connexion</Link>
            <Link to="/signup" className="btn btn-outline-primary">Inscription</Link>
          </>
        )}
      </div>
    </header>
  );
}


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Pour gérer l'état de chargement initial

  useEffect(() => {
    // Vérifier si un utilisateur est stocké dans localStorage au chargement initial
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored user:", e);
        localStorage.removeItem('user'); // Nettoyer si invalide
      }
    }
    setIsLoading(false); // Fin du chargement initial
  }, []); // Le tableau vide assure que cela ne s'exécute qu'une fois au montage

  // Fonction de déconnexion qui met à jour l'état et nettoie localStorage
  const handleLogout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
    alert('Déconnecté avec succès');
    // La redirection est gérée dans NavigationBar
  };

  // Si l'application est encore en train de vérifier l'état de connexion, afficher un indicateur
  if (isLoading) {
    return <div>Chargement de l'application...</div>; // Ou un spinner/composant de chargement
  }

  return (
    <BrowserRouter>
      <div className="App"> {/* Pour le sticky footer si configuré dans App.css */}

        {/* Barre de navigation et section Auth */}
        <NavigationBar currentUser={currentUser} onLogout={handleLogout} />

        {/* Conteneur principal pour le contenu de la page */}
        <main className="container"> {/* Applique les styles .container de App.css */}
          <Routes>
            {/* Routes publiques */}
            <Route path="/" element={<Home />} />
            {/* Login et Signup n'ont plus besoin de props spéciales ici car ils gèrent localStorage */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/programme" element={<Program />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/temoignages" element={<Testimonials />} />
            <Route path="/inscription" element={<Registration />} />
            <Route path="/alumni" element={<Alumni />} />

            {/* --- Routes Protégées --- */}
            {/* C'est ici que vous implémenteriez la logique de protection */}
            {/* Exemple conceptuel (nécessite un composant ProtectedRoute) : */}
            {/*
            <Route path="/admin" element={
              <ProtectedRoute user={currentUser} requiredRole="admin">
                <Admin />
              </ProtectedRoute>
            } />
            <Route path="/etudiant" element={
              <ProtectedRoute user={currentUser} requiredRole="etudiant">
                <Etudiant />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute user={currentUser}> // Accessible à tout utilisateur connecté
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/forum" element={
              <ProtectedRoute user={currentUser}>
                <Forum />
              </ProtectedRoute>
            } />
             <Route path="/calendar" element={
              <ProtectedRoute user={currentUser}>
                <Calendar />
              </ProtectedRoute>
            } />
            */}

            {/* --- Routes actuellement non protégées (pour test) --- */}
            {/* REMPLACEZ par la version protégée ci-dessus une fois prêt */}
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

        {/* Pied de page (Assurez-vous que les liens utilisent <Link>) */}
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
                  <li><Link to="/">Accueil</Link></li>
                  <li><Link to="/programme">Programme</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  {/* Ajoutez d'autres liens pertinents ici */}
                </ul>
              </div>
              <div className="footer-column">
                <h4>Légal</h4>
                <ul>
                  <li><Link to="/privacy">Politique de confidentialité</Link></li>
                  <li><Link to="/terms">Conditions d'utilisation</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-social">
              <h4>Suivez-nous</h4>
              <div className="social-icons">
                <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" /></Link>
                <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></Link>
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