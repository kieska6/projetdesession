// src/Program.js
import React from 'react';
import './Program.css'; // Importer le CSS

function Program() {
  return (
    <div className="page program-page">
      <h1>Le Programme</h1>
      <p>Informations détaillées sur notre programme de formation.</p>

      {/* Contenu spécifique au programme */}
      <section>
        <h2>Structure du cursus</h2>
        <p>Description des modules, durée, prérequis...</p>
      </section>
      <section>
        <h2>Objectifs pédagogiques</h2>
        <p>Compétences acquises à la fin de la formation...</p>
      </section>
      {/* ... autres sections ... */}
    </div>
  );
}

export default Program;