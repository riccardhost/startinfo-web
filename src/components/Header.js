import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/startinfox.png"; // Importa a logomarca
import "../styles/Header.css"; // Importe o arquivo CSS para os estilos

function Header() {

  return (

    <header className="header" id="banner">

      <nav className="nav">

        <div className="nav-containerA">

          {/* Logomarca */}

          <div className="logo-container">

            <Link to="/">
              <img
                src={logo}
                alt="Logomarca do Letramento Digital"
                className="logo"
              />
            </Link>
            
          </div>

          {/* Links de login e cadastro */}

          <div className="auth-links">

            <Link to="/login" className="auth-link">
              Login
            </Link>{" "}

            <Link to="/signup" className="auth-link">
              Cadastro
            </Link>

          </div>

        </div>

      </nav>

      <nav className="nav">
        <div className="nav-container">
          {/* Lista de links de navegação */}
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Pagina Inicial
              </Link>
            </li>
            <li>
              <Link to="/quemsomos" className="nav-link">
                Quem Somos?
              </Link>
            </li>
            <li>
              <Link to="/tutoriais" className="nav-link">
                Tutoriais
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contatos
              </Link>
            </li>
          </ul>
        </div>

      </nav>

      <nav className="nav">

        <div className="nav-container">
      
          {/* Campo de pesquisa abaixo da navbar */}

          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Pesquisar..."
            />

            <button className="search-button" type="button">
              <i className="bi bi-search"></i> {/* Ícone de pesquisa */}
            </button>

          </div>

        </div>

      </nav>

    </header>

  );

}

export default Header;
