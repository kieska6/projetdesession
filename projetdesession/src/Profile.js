// src/Profile.js
import React, { useState, useEffect } from 'react';
import './Profile.css'; // Importer le CSS

function Profile() {
  // Simuler la récupération des données utilisateur
  const [userData, setUserData] = useState({
    name: 'Utilisateur Test',
    email: 'test@example.com',
    role: 'Étudiant',
    joinDate: '2024-01-10',
    bio: 'Passionné par le développement web et les nouvelles technologies.'
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Logique pour sauvegarder les modifications (appel API)
    console.log('Profil sauvegardé:', userData);
    setIsEditing(false);
    alert('Profil mis à jour !');
  };

  return (
    <div className="page profile-page">
      <h1>Mon Profil</h1>

      {isEditing ? (
        <form className="profile-form" onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} />
          </div>
           <div className="form-group">
            <label htmlFor="bio">Biographie</label>
            <textarea id="bio" name="bio" rows="4" value={userData.bio} onChange={handleChange}></textarea>
          </div>
          <div className="profile-actions">
             <button type="submit" className="profile-btn save-btn">Sauvegarder</button>
             <button type="button" onClick={() => setIsEditing(false)} className="profile-btn cancel-btn">Annuler</button>
          </div>
        </form>
      ) : (
        <div className="profile-display">
          <p><strong>Nom :</strong> {userData.name}</p>
          <p><strong>Email :</strong> {userData.email}</p>
          <p><strong>Rôle :</strong> <span className={`role-badge ${userData.role?.toLowerCase()}-badge`}>{userData.role}</span></p>
          <p><strong>Membre depuis :</strong> {new Date(userData.joinDate).toLocaleDateString()}</p>
          <p><strong>Biographie :</strong> {userData.bio || 'Non renseignée'}</p>
          <button onClick={() => setIsEditing(true)} className="profile-btn edit-btn">Modifier le Profil</button>
        </div>
      )}
    </div>
  );
}

export default Profile;