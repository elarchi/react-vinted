// IMPORTATIONS ...

// ... des images de la page :

import vintedlogo from "../assets/img/vintedlogo.png";

// ... de la librairie react-router-dom pour mettre en place de la navigation :

import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();

  return (
    <div className="header_div header-container">
      <Link to={"/"}>
        <img src={vintedlogo} alt="Logo Vinted" />
      </Link>
      <input
        className="search-bar_input"
        type="text"
        placeholder="🔍 Recherche des articles"
      />
      {/* Si l'utilisateur a un token c'est qu'il s'est déjà log (soit en créant son compte, soit via la page login). Il ne lui reste donc plus qu'à se déconnecter à la fin de sa session. */}
      {token ? (
        <button
          onClick={() => {
            setUser(null);
            // On attribut comme valeur au token null pour passer dans les conditions voulues dans app.js
            navigate("/");
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <div>
          <Link to={"/signup"}>S'inscrire</Link>
          <Link to={"/login"}>Se connecter</Link>
        </div>
      )}

      <button>Vends tes articles</button>
    </div>
  );
};

export default Header;
