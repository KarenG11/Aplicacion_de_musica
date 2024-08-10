// src/components/Auth/Signup.jsx
import React, { useState } from 'react';
import './Signup.css'; // Importa el archivo CSS para el diseño

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}users/profiles/signup/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (!response.ok) {
                throw new Error('Error al registrarse');
            }

            // Maneja el éxito del registro aquí (por ejemplo, redirige al usuario)
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="signup-container">
            <h2>Registro</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="username">Nombre de Usuario</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Nombre de Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Registrarse</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Signup;
