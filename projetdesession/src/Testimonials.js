// src/Testimonials.js
import React from 'react';
import './Testimonials.css'; // Importer le CSS

function Testimonials() {
  // Exemple de données de témoignages (pourrait venir d'une API)
  const testimonialsData = [
    { id: 1, name: 'Alice Dupont', quote: 'Formation incroyable, j\'ai trouvé un emploi juste après !', role: 'Développeuse Web' },
    { id: 2, name: 'Bob Martin', quote: 'Les instructeurs sont passionnés et très compétents.', role: 'Ingénieur Logiciel' },
    { id: 3, name: 'Claire Moreau', quote: 'Le projet final m\'a vraiment préparée au monde professionnel.', role: 'Développeuse Full Stack' },
  ];

  return (
    <div className="page testimonials-page">
      <h1>Témoignages</h1>
      <p>Ce que nos anciens étudiants disent de nous.</p>

      <div className="testimonials-grid">
        {testimonialsData.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">- {testimonial.name}, {testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;