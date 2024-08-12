import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemePicker, useTheme } from "@teishi/bulma_theme";
import ArticleForm from "./components/ArticleForm";
import SongList from './components/SongList';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider } from './contexts/AuthContext'; // Asegúrate de que la ruta sea correcta

import './App.css';

function App() {
  const { primary, secondary } = useTheme(); // useTheme no necesita argumentos

  return (
    <AuthProvider>
      <ErrorBoundary>
        <Router>
          <div className={`box has-background-${secondary}`}>
            <ThemePicker />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <ArticleForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/songs"
                element={
                  <ProtectedRoute>
                    <SongList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </ErrorBoundary>
    </AuthProvider>
  );
}

export default App;
