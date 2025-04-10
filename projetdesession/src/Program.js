// src/Program.js
import React from 'react';
import { Link } from 'react-router-dom'; // Pour lier vers la page d'inscription/contact
import './Program.css'; // Assurez-vous d'avoir un fichier Program.css pour les styles

function Program() {
  return (
    <div className="program-page-container container mt-4 mb-5"> {/* Utilise container Bootstrap + marges */}
      <header className="program-header text-center mb-5">
        <h1>Notre Programme Intensif de Développement Web et Mobile</h1>
        <p className="lead">Transformez votre passion pour la technologie en une carrière d'avenir avec Code3737.</p>
      </header>

      {/* Section Objectifs */}
      <section className="program-section mb-5 p-4 bg-light rounded shadow-sm">
        <h2><i className="fas fa-bullseye me-2"></i>Objectifs du Programme</h2>
        <p>Notre programme est conçu pour vous doter des compétences techniques et pratiques nécessaires pour devenir un développeur full-stack compétent et prêt à l'emploi. À la fin de la formation, vous serez capable de :</p>
        <ul>
          <li>Concevoir, développer et déployer des applications web modernes et responsives.</li>
          <li>Maîtriser les langages fondamentaux du web : HTML5, CSS3, et JavaScript (ES6+).</li>
          <li>Construire des interfaces utilisateur interactives avec des frameworks frontend comme React.</li>
          <li>Développer des API RESTful robustes avec des technologies backend comme Node.js et Express.</li>
          <li>Gérer des bases de données relationnelles (SQL) et non relationnelles (NoSQL).</li>
          <li>Comprendre et appliquer les principes du développement mobile (par exemple avec React Native).</li>
          <li>Utiliser les outils essentiels du développeur : Git, GitHub, lignes de commande, environnements de développement.</li>
          <li>Travailler efficacement en équipe en utilisant des méthodologies agiles.</li>
          <li>Construire un portfolio solide pour démontrer vos compétences aux employeurs.</li>
        </ul>
      </section>

      {/* Section Public Cible */}
      <section className="program-section mb-5 p-4">
        <h2><i className="fas fa-users me-2"></i>À Qui s'adresse ce Programme ?</h2>
        <p>Cette formation est idéale pour :</p>
        <ul>
          <li>Les <strong>débutants motivés</strong> sans expérience préalable en programmation mais passionnés par la technologie.</li>
          <li>Les personnes en <strong>reconversion professionnelle</strong> cherchant à intégrer un secteur dynamique et porteur.</li>
          <li>Les <strong>étudiants ou jeunes diplômés</strong> souhaitant acquérir des compétences pratiques très demandées.</li>
          <li>Les professionnels souhaitant <strong>mettre à jour leurs compétences</strong> ou se spécialiser dans le développement web/mobile.</li>
        </ul>
        <p>Le critère principal est votre motivation, votre curiosité et votre engagement à apprendre.</p>
      </section>

      {/* Section Structure du Programme */}
      <section className="program-section mb-5 p-4 bg-light rounded shadow-sm">
        <h2><i className="fas fa-sitemap me-2"></i>Structure et Modules</h2>
        <p>Le programme est structuré en plusieurs modules progressifs, combinant théorie et pratique intensive :</p>
        <div className="accordion" id="programModulesAccordion">
          {/* Module 1 */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <strong>Module 1 : Les Fondations du Web</strong> (Semaines 1-2)
              </button>
            </h3>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#programModulesAccordion">
              <div className="accordion-body">
                Introduction au fonctionnement d'Internet, HTML5 sémantique, CSS3 (Flexbox, Grid, Responsive Design), Introduction à Git et GitHub, Déploiement simple.
              </div>
            </div>
          </div>
          {/* Module 2 */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Module 2 : JavaScript et Interactivité Frontend</strong> (Semaines 3-5)
              </button>
            </h3>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#programModulesAccordion">
              <div className="accordion-body">
                Bases de JavaScript (variables, types, fonctions, objets), ES6+, Manipulation du DOM, Événements, Asynchronisme (Promises, async/await), APIs Web (Fetch).
              </div>
            </div>
          </div>
          {/* Module 3 */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Module 3 : Framework Frontend - React</strong> (Semaines 6-8)
              </button>
            </h3>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#programModulesAccordion">
              <div className="accordion-body">
                Composants React, JSX, Props & State, Cycle de vie, Hooks (useState, useEffect, useContext), React Router, Gestion d'état (Context API / Redux/Zustand), Tests unitaires.
              </div>
            </div>
          </div>
          {/* Module 4 */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <strong>Module 4 : Backend et Bases de Données</strong> (Semaines 9-11)
              </button>
            </h3>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#programModulesAccordion">
              <div className="accordion-body">
                Node.js, npm, Express.js, APIs RESTful, Middleware, Authentification (JWT), Bases de données SQL (ex: PostgreSQL/MySQL), ORM (ex: Sequelize/Prisma), Bases de données NoSQL (ex: MongoDB).
              </div>
            </div>
          </div>
           {/* Module 5 */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                <strong>Module 5 : Développement Mobile avec React Native</strong> (Optionnel/Approfondissement - Semaine 12)
              </button>
            </h3>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#programModulesAccordion">
              <div className="accordion-body">
                 Introduction à React Native, Composants natifs, Navigation, Accès aux fonctionnalités du téléphone (caméra, géolocalisation), Publication sur les stores (principes).
              </div>
            </div>
          </div>
          {/* Module 6 */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                <strong>Module 6 : Projet Final et Professionnalisation</strong> (Semaines 12-13)
              </button>
            </h3>
            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#programModulesAccordion">
              <div className="accordion-body">
                Développement d'un projet full-stack complet en équipe, Méthodologies Agiles (Scrum), Tests avancés, Déploiement (ex: Heroku, Netlify, AWS), Préparation aux entretiens, Construction du portfolio.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Méthodologie */}
      <section className="program-section mb-5 p-4">
        <h2><i className="fas fa-cogs me-2"></i>Notre Méthodologie Pédagogique</h2>
        <p>Nous croyons en l'apprentissage par la pratique ("Learning by Doing"). Notre approche inclut :</p>
        <ul>
          <li><strong>Projets Concrets :</strong> Réalisation de nombreux projets individuels et en groupe pour appliquer les concepts appris.</li>
          <li><strong>Cours Interactifs :</strong> Sessions théoriques dynamiques suivies d'exercices pratiques.</li>
          <li><strong>Mentorat :</strong> Accompagnement personnalisé par des instructeurs expérimentés.</li>
          <li><strong>Code Reviews :</strong> Feedback constructif sur votre code pour améliorer sa qualité et adopter les bonnes pratiques.</li>
          <li><strong>Pair Programming :</strong> Apprendre à collaborer et à résoudre des problèmes à deux.</li>
          <li><strong>Communauté :</strong> Un environnement d'apprentissage stimulant et collaboratif avec les autres étudiants et les alumni.</li>
        </ul>
      </section>

       {/* Section Technologies */}
      <section className="program-section mb-5 p-4 bg-light rounded shadow-sm">
        <h2><i className="fas fa-laptop-code me-2"></i>Technologies Clés Enseignées</h2>
        <div className="tech-list d-flex flex-wrap justify-content-center">
          {/* Ajoutez des logos ou juste du texte */}
          <span className="badge bg-primary m-2 p-2">HTML5</span>
          <span className="badge bg-info m-2 p-2">CSS3</span>
          <span className="badge bg-warning text-dark m-2 p-2">JavaScript (ES6+)</span>
          <span className="badge bg-secondary m-2 p-2">React</span>
          <span className="badge bg-success m-2 p-2">Node.js</span>
          <span className="badge bg-dark m-2 p-2">Express.js</span>
          <span className="badge bg-danger m-2 p-2">SQL (PostgreSQL/MySQL)</span>
          <span className="badge bg-success m-2 p-2">NoSQL (MongoDB)</span>
          <span className="badge bg-secondary m-2 p-2">Git / GitHub</span>
          <span className="badge bg-info m-2 p-2">React Native</span>
          <span className="badge bg-primary m-2 p-2">API REST</span>
          {/* Ajoutez d'autres technologies pertinentes : Docker, AWS, Testing frameworks... */}
        </div>
      </section>

      {/* Section Débouchés */}
      <section className="program-section mb-5 p-4">
        <h2><i className="fas fa-briefcase me-2"></i>Débouchés Professionnels</h2>
        <p>À l'issue de la formation, vous serez qualifié pour postuler à des postes tels que :</p>
        <ul>
          <li>Développeur Web Junior</li>
          <li>Développeur Frontend</li>
          <li>Développeur Backend</li>
          <li>Développeur Full-Stack</li>
          <li>Développeur JavaScript</li>
          <li>Développeur React</li>
          <li>Développeur Mobile (React Native)</li>
        </ul>
        <p>Nous offrons également un accompagnement carrière (aide au CV, préparation aux entretiens, mise en relation avec notre réseau) pour maximiser vos chances de trouver rapidement un emploi.</p>
      </section>

      {/* Section Appel à l'action */}
      <section className="program-cta text-center p-5 bg-primary text-white rounded shadow">
        <h2>Prêt à Lancer Votre Carrière dans le Développement ?</h2>
        <p>N'attendez plus pour transformer votre avenir. Découvrez les prochaines sessions et postulez dès aujourd'hui !</p>
        <Link to="/inscription" className="btn btn-light btn-lg me-3">Postuler Maintenant</Link>
        <Link to="/contact" className="btn btn-outline-light btn-lg">Nous Contacter</Link>
      </section>
    </div>
  );
}

export default Program;