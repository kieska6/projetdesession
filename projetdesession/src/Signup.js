import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom'; // Importer useNavigate

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate(); // Hook pour la redirection
    const [error, setError] = useState(''); // Pour afficher les erreurs

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
        setError(''); // Réinitialiser l'erreur

        try {
            // URL de votre script PHP signup
            const apiUrl = 'http://localhost/projetdesession/projetdesession/api/signup.php'; // Adaptez le chemin

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Indiquer qu'on envoie du JSON
                },
                body: JSON.stringify(values), // Convertir les données JS en chaîne JSON
            });

            const result = await response.json(); // Lire la réponse JSON du serveur

            if (response.ok) { // Vérifier si le statut HTTP est OK (2xx)
                console.log("Signup successful:", result);
                // Rediriger vers la page de connexion après succès
                navigate('/login');
            } else {
                // Gérer les erreurs renvoyées par le serveur (4xx, 5xx)
                console.error("Signup failed:", result.message);
                setError(result.message || 'Une erreur est survenue lors de l\'inscription.');
            }

        } catch (err) {
            // Gérer les erreurs réseau ou autres erreurs JS
            console.error("Network or other error:", err);
            setError('Impossible de contacter le serveur. Vérifiez votre connexion.');
        }
    };

    return (
        // ... (votre JSX de formulaire reste le même)
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Creer un compte</h2>
                {error && <div className="alert alert-danger">{error}</div>} {/* Afficher l'erreur */}
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Nom</strong></label>
                        <input type="text" placeholder='Enter Name' name='name'
                            onChange={handleInput} className='form-control rounded-0' required />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                            onChange={handleInput} className='form-control rounded-0' required />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Mot de passe</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                            onChange={handleInput} className='form-control rounded-0' required />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Creer un compte</button>
                    <p>You agree to our terms and policies</p>
                    <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Se connecter</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;