import { Outlet } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import { ThemeProvider } from "@teishi/bulma_theme";
import NavBar from "../components/NavBar"; // Ajusta la ruta según sea necesario

export default function Layout() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <div className={`hero is-fullheight is-flex is-flex-direction-column`}>
                    <NavBar appName="InfoSphere" /> {/* Incluye NavBar aquí */}
                    <Outlet />
                </div>
            </ThemeProvider>
        </AuthProvider>
    );
}
