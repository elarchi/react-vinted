// IMPORTATIONS ...

// ... de la librairie axios pour faire des requêtes vers l'API :

import axios from "axios";

// .. de useState de la librairie react pour stocker de la data :

import { useState } from "react";

/// ... de la librairie react-router-dom pour mettre en place de la navigation :

import { Link, useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  // Transfert de la fonction setUser dans les props pour pouvoir l'utiliser sur cette page, afin de gérer l'authentification des users lors du signup.

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  // Création des états pour écouter les modifications des inputs.

  const [errorMessage, setErrorMessage] = useState("");
  // Création d'une state pour stocker d'éventuel message d'erreur afin de les renvoyer à l'utilisateur.

  const navigate = useNavigate();
  // Mise en place de la fonction permettant la navigation sans clic de l'utilisateur.

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Création d'une fonction pour submit le form, en gardant les données, sans rafraîchir la page et set le token.

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email,
          password,
          username,
          newsletter,
        }
        /* 
        Il s'agit du body envoyé en requête POST à l'API.

        Peut s'écrire également de la sorte : 
        {
          email: email,
          password: password,
          username: username,
          newsletter: newsletter,
        }
        */
      );
      console.log(response.data);

      if (response.data.token) {
        // Si l'API renvoit un token, faire :
        setUser(response.data.token);
        // Mettre en mémoire utilisateur le dit token.
        navigate("/");
        // Imposer une navigation à la fin de la soumission et authentification du formulaire.
      }
    } catch (error) {
      console.log("Signup Error ===> ", error.response);
      console.log("Catch error ===>", error.response);
      // Mise en place de messages d'erreur plus spéficiques

      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte.");
      }
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>S'inscrire</h2>
          <input
            type="text"
            placeholder="Nom d'Utilisateur"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="checkbox"
            onClick={(event) => setNewsletter(event.target.checked)}
          />
          <h3>S'inscrire à notre newsletter</h3>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions de Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <input type="submit" value={"S'inscrire"} />
          <span>{errorMessage}</span>
          <Link to={"/login"}>
            <p>Tu as déjà un compte ? Connecte-toi !</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
