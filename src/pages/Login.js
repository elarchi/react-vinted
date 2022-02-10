import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [data, setData] = useState();

  // créons des états pour écouter les modifications des champs du form

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // créons une fonction pour soumettre le form, garder les informations entrées, donner un token à l'user
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      setData(response.data);
      Cookies.get("tokenUser");

      // if ("tokenUser") {
      // } else {
      //   <p>Vous ne semblez pas avoir de compte.</p>;
      // }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <form onSubmit={handleSubmit}>
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
