import vintedlogo from "../assets/img/vintedlogo.png";

const Header = () => {
  return (
    <div className="header_div header-container">
      <img src={vintedlogo} alt="Logo Vinted" />
      <input
        className="search-bar_input"
        type="text"
        placeholder="🔍 Recherche des articles"
      />
      <button>S'inscrire</button>
      <button>Se connecter</button>
      <button>Vends tes articles</button>
    </div>
  );
};

export default Header;
