import vintedlogo from "../assets/img/vintedlogo.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
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
      <Link to={"/signup"}>
        <button>S'inscrire</button>
      </Link>

      {Cookies.get("tokenUser") ? (
        <button
          onClick={() => {
            Cookies.remove("tokenUser");
            navigate("/");
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <Link to={"/login"}>
          <button>Se connecter</button>
        </Link>
      )}

      <button>Vends tes articles</button>
    </div>
  );
};

export default Header;
