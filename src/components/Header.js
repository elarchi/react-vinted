// IMPORTATIONS ...

// ... des images de la page

import vintedlogo from "../assets/img/vintedlogo.png";

// ... de la librairie react-router-dom pour mettre en place de la navigation :

import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();

  return (
    <div className="header_div header-container">
      {/* 
      ======================================================= LOGO 
      */}
      <div className="header-logo_div">
        <Link to={"/"}>
          <img src={vintedlogo} alt="Logo Vinted" />
        </Link>
      </div>
      {/* 
      ======================================================= FILTERS 
      */}
      <div className="header-filters_div">
        <input
          className="header-filters-searchBar_input"
          type="text"
          placeholder="🔍 Recherche des articles"
        />
      </div>
      {/* 
      ======================================================= CONNEXIONS 
      */}
      <div className="header-connexions_div">
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
          <div className="header-connexions_div">
            <Link className={"header-connexions_link"} to={"/signup"}>
              S'inscrire
            </Link>
            <Link className={"header-connexions_link"} to={"/login"}>
              Se connecter
            </Link>
          </div>
        )}
      </div>

      <div className="header-posting_div">
        <Link to={"/"} className="header-posting_link">
          Vends tes articles
        </Link>
        {/* <button>Vends tes articles</button> */}
      </div>
    </div>
  );
};

export default Header;
