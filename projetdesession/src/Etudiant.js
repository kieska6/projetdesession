// src/Etudiant.js
import React from 'react';
import './Etudiant.css'; // Importer le fichier CSS correspondant

function Etudiant() {
  // Ici, vous pourriez récupérer les données de l'étudiant connecté, ses cours, etc.
  // const [studentData, setStudentData] = useState(null);
  // useEffect(() => { /* Fetch data */ }, []);

  return (
    // Utiliser la classe 'page' pour hériter des styles de base de App.css
    // et 'etudiant-page' pour les styles spécifiques de Etudiant.css
    <div className="page etudiant-page">
      <h1>Espace Étudiant</h1>
      <p>Bienvenue sur votre tableau de bord personnel.</p>

      {/* --- Contenu spécifique à l'étudiant --- */}
      <div className="etudiant-section">
        <h2>Mes Cours</h2>
        {/* Liste des cours inscrits, progression, etc. */}
        <ul>
          <li>Introduction à React - Progression: 75%</li>
          <li>Node.js pour les débutants - Progression: 40%</li>
          <li>Bases de données SQL - Non commencé</li>
        </ul>
        <a href="/cours" className="etudiant-link">Voir tous mes cours</a>
      </div>

      <div className="etudiant-section">
        <h2>Mon Calendrier</h2>
        <p>Prochains devoirs, examens, et événements...</p>
        {/* Intégration d'un calendrier ou liste d'événements */}
      </div>

      <div className="etudiant-section">
        <h2>Mes Notes</h2>
        <p>Consultez vos résultats...</p>
        {/* Tableau des notes */}
      </div>
      {/* --- Fin du contenu spécifique --- */}

    </div>
  );
}

export default Etudiant;