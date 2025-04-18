import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
//import NotFound from "./pages/NotFound"; // Puedes tener una página 404
import NavBar from "./components/NavBar/Navbar";

function App() {
  return (
    <UserProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} /> {/* Esta ruta la deberías tener */}
         {/*<Route path="*" element={<NotFound />} />  Página de error 404 */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
