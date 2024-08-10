import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemePicker, useTheme } from "@teishi/bulma_theme";
import ArticleForm from "./components/ArticleForm";
import SongList from './components/SongList';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Signup from './components/Signup'; // Asegúrate de tener el componente Signup

import './App.css';

function App() {
  const { primary, secondary } = useTheme("state");

  return (
    <Router>
      <div className={`box has-background-${secondary}`}>
        <ThemePicker />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> {/* Agrega esta línea */}
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
  );
}

export default App;
