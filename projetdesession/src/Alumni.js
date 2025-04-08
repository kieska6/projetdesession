// src/Alumni.js
import React from 'react';
import './Alumni.css'; // Importer le CSS

function Alumni() {
  // Données factices pour les profils d'anciens
  const alumniData = [
    { id: 1, name: 'Jean Dupont', cohort: 2022, currentJob: 'Développeur Frontend @ TechCorp', linkedin: '#' },
    { id: 2, name: 'Sophie Dubois', cohort: 2023, currentJob: 'Ingénieure Backend @ Innovate Solutions', linkedin: '#' },
    { id: 3, name: 'Marc Petit', cohort: 2022, currentJob: 'Développeur Mobile Freelance', linkedin: '#' },
  ];

  return (
    <div className="page alumni-page">
      <h1>Salle des Alumni</h1>
      <p>Découvrez où sont nos anciens étudiants et connectez-vous.</p>

      <div className="alumni-grid">
        {alumniData.map(alumnus => (
          <div key={alumnus.id} className="alumni-card">
            <h3>{alumnus.name}</h3>
            <p><strong>Promotion :</strong> {alumnus.cohort}</p>
            <p><strong>Poste actuel :</strong> {alumnus.currentJob}</p>
            <a href={alumnus.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">Profil LinkedIn</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alumni;