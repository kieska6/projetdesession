// src/Admin.js
import React from 'react';
import './Admin.css'; // Importer le fichier CSS correspondant

function Admin() {
  // Ici, vous pourriez récupérer des données spécifiques à l'admin, gérer des états, etc.

  return (
    // Utiliser la classe 'page' pour hériter des styles de base de App.css
    // et 'admin-page' pour les styles spécifiques de Admin.css
    <div className="page admin-page">
      <h1>Espace Administration</h1>
      <p>Bienvenue dans le panneau d'administration. Cette section est réservée aux utilisateurs avec les droits administrateur.</p>

      {/* --- Contenu spécifique à l'administration --- */}
      <div className="admin-section">
        <h2>Gestion des Utilisateurs</h2>
        {/* Ici, vous pourriez afficher une liste d'utilisateurs, des boutons pour ajouter/modifier/supprimer */}
        <p>Tableau de bord pour la gestion des comptes utilisateurs...</p>
        <button className="admin-button">Ajouter un utilisateur</button>
      </div>

      <div className="admin-section">
        <h2>Paramètres du Site</h2>
        <p>Configuration générale de l'application...</p>
        {/* Formulaire de paramètres, etc. */}
      </div>

      <div className="admin-section">
        <h2>Statistiques</h2>
        <p>Graphiques et données d'utilisation...</p>
        {/* Composants de graphiques, etc. */}
      </div>
      {/* --- Fin du contenu spécifique --- */}

    </div>
  );
}

export default Admin;