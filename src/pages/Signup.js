import Header from "../components/Header.js";
// imports pour effectuer la requête axios.post
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
//importation library js-cookie
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const [token, setToken] = useState();

  // créons des états pour écouter les modifications des inputs

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  // créons une fonction pour submit le form, en gardant les données, sans rafraîchir la page

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          password: password,
          username: username,
          newsletter: newsletter,
        }
      );
      console.log(response.data);
      setData(response.data);
      // on set un cookie, avec son nom et sa valeur
      Cookies.set("tokenUser", response.data.token);
      setToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  //créons une fonction qui change l'état de newsletter
  const handleCheckbox = () => {
    if (newsletter === false) {
      setNewsletter(true);
    } else {
      setNewsletter(false);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <form onSubmit={handleSubmit}>
          <h2>S'inscrire</h2>
          <input
            value={username}
            type="text"
            placeholder="Nom d'Utilisateur"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            value={email}
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            value={password}
            type="password"
            placeholder="Mot de passe"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="checkbox"
            onClick={handleCheckbox}
            defaultChecked={newsletter}
            value={newsletter}
          />
          <h3>S'inscrire à notre newsletter</h3>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions de Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <input type="submit" value={"S'inscrire"} />
          <Link to={"/login"}>
            <p>Tu as déjà un compte ? Connecte-toi !</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
