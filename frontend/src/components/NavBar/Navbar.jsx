import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logoColibri from "../../assets/logoColibri.png"; // fijate que sea .png
import './NavBar.css';


const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleOffcanvas = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="navbar1">
      <nav className="navbar d-flex justify-content-between align-items-center p-3">
        <div className="d-flex align-items-center">
           <img src={logoColibri} alt="Colibrí de Letras" className="logo me-2" />
          <span className="navbar-brand">Colibrí de Letras</span>
        </div>

        <div className="d-flex align-items-center">
          <a href="/"><i className="bi bi-house me-3"></i></a>
          <button onClick={toggleOffcanvas} className="btn btn-outline-dark">
            ☰
          </button>
        </div>
      </nav>

      {showMenu && (
        <div className="offcanvas-custom">
          <div className="offcanvas-header d-flex justify-content-between align-items-center p-3">
            <h5>Colibrí de Letras</h5>
            <button onClick={closeMenu} className="btn-close" />
          </div>

          <ul className="list-group list-group-flush px-3">
            <li><a href="/">Inicio</a></li>
            <li><a href="/pages/nosotros.html">Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#" onClick={closeMenu}>Crear Card</a></li>
            <li><a href="#">Compras</a></li>
          </ul>

          <div className="px-3 mt-3">
            <input className="form-control mb-2" type="text" placeholder="Buscar..." />
            <button className="btn btn-success w-100">Buscar</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;     