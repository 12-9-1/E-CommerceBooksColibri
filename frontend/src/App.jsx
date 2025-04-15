import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar/Navbar'; 
import Home from "./pages/Home"; // agregar al inicio
import AuthPage from "./pages/AuthPage";
import './App.css';

function App() {
  return (
    <Router>
      {/* Colocamos el NavBar fuera de Routes */}
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
