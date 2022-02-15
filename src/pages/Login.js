// IMPORTATIONS ...

// ... de la librairie axios pour faire des requêtes vers l'API :

import axios from "axios";

// .. de useState de la librairie react pour stocker de la data :

import { useState } from "react";

// ... de la librairie react-router-dom pour mettre en place de la navigation :

import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // Création des états pour écouter les modifications des inputs.

  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // Création d'une fonction pour submit le form, en gardant les données, sans rafraîchir la page, et set le token.
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      console.log("reponse.data ===>", response.data);

      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage("Mauvais email et/ou mot de passe. ");
      }
    }
  };

  return (
    <div className="login_div">
      <h2>Se connecter</h2>
      <form className="login_form " onSubmit={handleSubmit}>
        <div className="login-form-fields-input_div">
          <input
            className="login-form-fields_input"
            type="email"
            placeholder="Adresse mail"
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            className="login-form-fields_input"
            type="password"
            placeholder="Mot de passe"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="login-form-links_div">
          <div className="login-form-links-link_div">
            <input
              to="/"
              className="login-form-links-submit_input"
              type="submit"
              value="Se connecter"
            />
          </div>

          <span>{errorMessage}</span>

          <Link to={"/signup"} className="login-form-links-signup_link">
            Pas encore de compte ? Inscris-toi !
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
