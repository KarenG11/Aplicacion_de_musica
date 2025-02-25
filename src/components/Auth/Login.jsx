import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import './login.css'; 

function Login() {
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate(); // Crea la función de navegación

    // Accede a las acciones del contexto
    const { actions } = useAuth(); 

    function handleSubmit(event) {
        event.preventDefault();
        if (!isLoading) {
            setIsLoading(true);
            fetch(`${import.meta.env.VITE_API_BASE_URL}api-auth/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: usernameRef.current.value,
                    password: passwordRef.current.value,
                }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("No se pudo iniciar sesión");
                    }
                    return response.json();
                })
                .then((responseData) => {
                    actions.login(responseData.token); 
                    if (responseData.token) {
                        fetch(
                            `${import.meta.env.VITE_API_BASE_URL}users/profiles/profile_data/`,
                            {
                                method: "GET",
                                headers: {
                                    Authorization: `Token ${responseData.token}`,
                                },
                            }
                        )
                            .then((profileResponse) => {
                                if (!profileResponse.ok) {
                                    throw new Error("Error al obtener id de usuario");
                                }
                                return profileResponse.json();
                            })
                            .then((profileData) => {
                                actions.login(responseData.token, profileData.user__id); 
                                navigate('/profile'); // Redirige al perfil después del login exitoso
                            })
                            .catch((error) => {
                                console.error("Error al obtener id de usuario", error);
                                setIsError(true);
                            });
                    }
                })
                .catch((error) => {
                    console.error("Error al iniciar sesión", error);
                    setIsError(true);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }

    return (
        <section className="login-section">
            <div className="login-container">
                <div className="login-image">
                    <img src="https://media.es.wired.com/photos/6480a40988218b01bf4a1cb6/16:9/w_1600,c_limit/Will-AI-Music-Suck-Culture-1423337499.jpg" alt="Imagen descriptiva" />
                </div>
                <div className="login-form">
                    <h1 className="login-title">Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="username">Nombre de usuario:</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    ref={usernameRef}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="password">Contraseña:</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="password"
                                    id="password"
                                    name="password"
                                    ref={passwordRef}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button
                                    type="submit"
                                    className="button is-primary is-fullwidth"
                                    disabled={isLoading}
                                >
                                    Enviar
                                </button>
                                {isLoading && <p>Cargando...</p>}
                                {isError && <p>Error al cargar los datos.</p>}
                            </div>
                        </div>
                    </form>
                    <p className="register-message">
                        ¿No estás registrado? <a href="/signup">Regístrate aquí</a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Login;
