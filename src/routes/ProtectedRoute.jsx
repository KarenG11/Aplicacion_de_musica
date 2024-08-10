// src/components/ProtectedRoute.jsx
import { useAuth } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth(); // Asegúrate de que `useAuth` devuelve `isAuthenticated`
    const location = useLocation();

    // Redirige a la página de inicio de sesión si el usuario no está autenticado
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    // Renderiza los hijos si el usuario está autenticado
    return children;
}
