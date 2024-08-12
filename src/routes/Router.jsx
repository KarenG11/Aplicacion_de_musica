// src/routes/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import ArticleForm from "../components/ArticleForm";
import Home from "../components/Home";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import Layout from "./Layout";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../components/Profile";
import SongList from "../components/MusicPlayer/SongList";
import NotFound from "../components/NotFound"; // Asegúrate de tener un componente NotFound

const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                index: true, // path: "/"
                element: <Home />,
            },
            {
                path: "articles",
                children: [
                    {
                        index: true,
                        element: <h1>Artículos</h1>,
                    },
                    {
                        path: "add",
                        element: (
                            <ProtectedRoute>
                                <ArticleForm />
                            </ProtectedRoute>
                        ),
                    },
                ],
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "songs",
                element: (
                    <ProtectedRoute>
                        <SongList />
                    </ProtectedRoute>
                ),
            },
            {
                path: "profile",
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                ),
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />, // Asegúrate de tener un componente NotFound
    },
]);

export { Router };