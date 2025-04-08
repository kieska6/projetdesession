// src/Forum.js
import React from 'react';
import './Forum.css'; // Importer le CSS

function Forum() {
  // Données factices pour les sujets du forum
  const forumTopics = [
    { id: 1, title: 'Problème avec useEffect dans React', author: 'User123', replies: 5, lastPost: 'il y a 2 heures' },
    { id: 2, title: 'Comment centrer un div ?', author: 'NewbieDev', replies: 12, lastPost: 'il y a 5 heures' },
    { id: 3, title: 'Meilleures pratiques Node.js pour API REST', author: 'BackendGuru', replies: 8, lastPost: 'hier' },
  ];

  return (
    <div className="page forum-page">
      <h1>Forum Q&A</h1>
      <p>Posez vos questions, partagez vos connaissances et aidez les autres.</p>

      <button className="new-topic-btn">Créer un nouveau sujet</button>

      <table className="forum-table">
        <thead>
          <tr>
            <th>Sujet</th>
            <th>Auteur</th>
            <th>Réponses</th>
            <th>Dernier message</th>
          </tr>
        </thead>
        <tbody>
          {forumTopics.map(topic => (
            <tr key={topic.id}>
              <td><a href={`/forum/topic/${topic.id}`}>{topic.title}</a></td>
              <td>{topic.author}</td>
              <td>{topic.replies}</td>
              <td>{topic.lastPost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Forum;