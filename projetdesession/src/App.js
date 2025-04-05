import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  // Fonction pour afficher une page spécifique
  const showPage = (pageId) => {
    setCurrentPage(pageId);
  };

  // Fonction de connexion simulée
  const handleLogin = () => {
    const mockUsers = [
      { name: "Admin User", email: "admin@code3737.com", role: "admin" },
      { name: "Étudiant Test", email: "etudiant@code3737.com", role: "student" }
    ];
    
    // Pour la démo, choisissons aléatoirement un utilisateur
    const user = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    setCurrentUser(user);
    alert(`Connecté en tant que ${user.name} (${user.role})`);
  };

  // Fonction de déconnexion
  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('home');
    alert('Déconnecté avec succès');
  };

  // Vérification des autorisations pour afficher les éléments
  const shouldShow = (type) => {
    if (!currentUser) return false;
    if (type === 'auth') return true;
    if (type === 'admin' && currentUser.role === 'admin') return true;
    if (type === 'student' && currentUser.role === 'student') return true;
    return false;
  };

  return (
    <div className="App">
      <header>
        <h1>Code3737</h1>
        <nav>
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); showPage('home'); }}>Accueil</a></li>
            <li><a href="#program" onClick={(e) => { e.preventDefault(); showPage('program'); }}>Le Programme</a></li>
            <li><a href="#registration" onClick={(e) => { e.preventDefault(); showPage('registration'); }}>Inscription</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); showPage('contact'); }}>Nous joindre</a></li>
            <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); showPage('testimonials'); }}>Témoignages</a></li>
            {shouldShow('admin') && <li><a href="#admin" onClick={(e) => { e.preventDefault(); showPage('admin'); }}>Administration</a></li>}
            {shouldShow('auth') && <li><a href="#calendar" onClick={(e) => { e.preventDefault(); showPage('calendar'); }}>Calendrier scolaire</a></li>}
            {shouldShow('auth') && <li><a href="#profile" onClick={(e) => { e.preventDefault(); showPage('profile'); }}>Mon Profil</a></li>}
            {shouldShow('auth') && <li><a href="#forum" onClick={(e) => { e.preventDefault(); showPage('forum'); }}>Forum</a></li>}
            {shouldShow('auth') && <li><a href="#alumni" onClick={(e) => { e.preventDefault(); showPage('alumni'); }}>Salle des Alumni</a></li>}
          </ul>
        </nav>
        <div className="auth-section">
          {currentUser ? (
            <div className="user-info">
              <span>{currentUser.name}</span>
              <span className={`role-badge ${currentUser.role}-badge`}>
                {currentUser.role === 'admin' ? 'Admin' : 'Étudiant'}
              </span>
              <button className="btn btn-primary" onClick={handleLogout}>Déconnexion</button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={handleLogin}>Connexion avec Microsoft</button>
          )}
        </div>
      </header>
      
      <div className="container">
        {/* Page Accueil */}
        {currentPage === 'home' && (
          <div id="home" className="page">
            <h2>Bienvenue chez Code3737</h2>
            <p>Découvrez notre programme de formation exceptionnel conçu pour vous préparer aux carrières technologiques de demain.</p>
            <p>Pour les candidats intéressés, veuillez visiter notre page <a href="#registration" onClick={(e) => { e.preventDefault(); showPage('registration'); }}>d'inscription</a>.</p>
          </div>
        )}
        
        {/* Page Programme */}
        {currentPage === 'program' && (
          <div id="program" className="page">
            <h2>Le Programme</h2>
            <p>Notre programme offre une formation complète en développement logiciel avec des certifications reconnues par l'industrie.</p>
          </div>
        )}
        
        {/* Page Inscription */}
        {currentPage === 'registration' && (
          <div id="registration" className="page">
            <h2>Inscription au Programme</h2>
            <p>Remplissez le formulaire pour postuler à notre programme ou assister à une séance d'information.</p>
          </div>
        )}
        
        {/* Page Nous joindre */}
        {currentPage === 'contact' && (
          <div id="contact" className="page">
            <h2>Nous joindre</h2>
            <p>Contactez-nous pour plus d'informations sur notre programme.</p>
          </div>
        )}
        
        {/* Page Témoignages */}
        {currentPage === 'testimonials' && (
          <div id="testimonials" className="page">
            <h2>Témoignages</h2>
            <p>Découvrez ce que nos anciens étudiants disent de notre programme.</p>
          </div>
        )}
        
        {/* Page Administration (Admin seulement) */}
        {currentPage === 'admin' && shouldShow('admin') && (
          <div id="admin" className="page">
            <h2>Administration</h2>
            <p>Gestion des étudiants et du programme.</p>
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Cohorte</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Données des étudiants */}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Page Calendrier (Auth seulement) */}
        {currentPage === 'calendar' && shouldShow('auth') && (
          <div id="calendar" className="page">
            <h2>Calendrier scolaire</h2>
            <p>Consultez les dates importantes du programme.</p>
          </div>
        )}
        
        {/* Page Profil (Auth seulement) */}
        {currentPage === 'profile' && shouldShow('auth') && (
          <div id="profile" className="page">
            <h2>Mon Profil</h2>
            <p>Gérez vos informations personnelles.</p>
          </div>
        )}
        
        {/* Page Forum (Auth seulement) */}
        {currentPage === 'forum' && shouldShow('auth') && (
          <div id="forum" className="page">
            <h2>Forum Q&A</h2>
            <p>Posez des questions et partagez vos connaissances.</p>
          </div>
        )}
        
        {/* Page Alumni (Auth seulement) */}
        {currentPage === 'alumni' && shouldShow('auth') && (
          <div id="alumni" className="page">
            <h2>Salle des Alumni</h2>
            <p>Découvrez les projets de nos anciens étudiants.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
