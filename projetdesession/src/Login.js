import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            // URL de votre script PHP login
            const apiUrl = 'http://localhost/projetdesession/projetdesession/api/login.php'; // Adaptez le chemin

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const result = await response.json();

            if (response.ok) {
                console.log("Connexion reussie:", result);
                navigate('/home'); // Rediriger vers la page d'accueil par exemple
            } else {
                console.error("Login failed:", result.message);
                setError(result.message || 'Email ou mot de passe incorrect.');
            }

        } catch (err) {
            console.error("Network or other error:", err);
            setError('Impossible de contacter le serveur.');
        }
    };

    return (
        // ... (votre JSX de formulaire reste le même)
         <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Connexion</h2>
                 {error && <div className="alert alert-danger">{error}</div>} {/* Afficher l'erreur */}
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="email" placeholder='Entrer un Email' name='email'
                        onChange={handleInput} className='form-control rounded-0' required/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Mot de passe:</strong></label>
                        <input type="password" placeholder='Entrer un mot de passe' name='password'
                        onChange={handleInput} className='form-control rounded-0' required/>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Se connecter</button>
                    <p>You agree to our terms and policies</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Creer un compte</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;