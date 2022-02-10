import Header from "../components/Header";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Header />
      <div>
        <form>
          <h2>Se connecter</h2>
          <input type="email" placeholder="Adresse mail" />
          <input type="password" placeholder="Mot de passe" />

          <button>Se connecter</button>
          <Link to={"/login"}>
            <p>Pas encore de compte ? Inscris-toi !</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
