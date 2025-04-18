import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import logoColibri from "../assets/logoColibri.png"; // fijate que sea .png
import { useUser } from "../context/UserContext";

const Home = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-hero">
        <img src={logoColibri} alt="Colibrí de Letras" className="logo" />
        <h1>Colibrí de Letras</h1>
        <p>Donde cada historia despliega sus alas 📖✨</p>
        <div className="home-buttons">
          {user ? (
            <button onClick={() => navigate("/libros")}>Ver mis libros</button>
          ) : (
            <button onClick={() => navigate("/login")}>Iniciar sesión</button>
          )}
          <button onClick={() => alert("Explorar libros aún no implementado 😅")}>Explorar libros</button>
        </div>
      </div>
    </div>
  );
};


export default Home;
