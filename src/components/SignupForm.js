import { Link } from "react-router-dom";

const SignupForm = () => {
  // créons des états pour écouter les modifications des inputs

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [newsletter, setNewsletter] = useState(false);

  // créons une fonciton pour submit le form, en gardans les données, sans rafraîchir la page

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <h2>S'inscrire</h2>
        <input type="text" placeholder="Nom d'Utilisateur" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <input type="checkbox" />
        <h3>S'inscrire à notre newsletter</h3>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions de Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button>S'inscrire</button>
        <Link to={"/login"}>
          <p>Tu as déjà un compte ? Connecte-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
