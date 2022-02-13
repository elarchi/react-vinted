// IMPORTATIONS ...

// ... des feuilles de style :

import "./App.css";
import "./assets/css/home.css";
import "./assets/css/offer.css";
import "./assets/css/signup.css";
import "./assets/css/header.css";
import "./assets/css/hero.css";
import "./assets/css/login.css";

// ... de la librairie react-router-dom pour faire de la navigation :

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ... des pages :

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

// ... de la librairie pour les cookies :

import Cookies from "js-cookie";

// ... de la libraire des states :

import { useState } from "react";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  // création d'un état pour pouvoir rafraîchir les composants comportants token

  /* 
  CREATION D'UNE FONCTION POUR SET/REMOVE LE TOKEN :

  Mise en place d'une condition pour choisir de set ou remove le token.

  Lorsque l'utilisateur se log ou crée un compte, soit lorsqu'il s'authentifie, il reçoit un token qu'il faut set dans les cookies.

  Lorsque l'utilisateur cherche à se déconnecter, il faut lui retirer son token d'accès au reste du site, soit retirer le token des cookies.
  */

  const setUser = (token) => {
    if (token) {
      Cookies.set("useToken", token, { expires: 10 });
    } else {
      Cookies.remove("userToken");
    }
    setToken(token);
  };

  return (
    <div className="App">
      {/* STRUCTURE DU SITE :
Router is the navigation parent's
Routes contains the page's list
Route is the component that contains the page */}

      <Router>
        <Header setUser={setUser} token={token} />
        {/* On place le Header en dehors des Routes car il est commun aux différentes pages. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          {/* On envoie aux props des composants la fonction qui permet de set les cookies, car elle permet le bon fonctionnement de l'authentification lors du signUp/login. */}
          <Route path="*" element={<NotFound />} />
          {/* Le chemin "*" permet d'orienter toutes les routes qui n'ont pas été précisées ci-avant vers cette page là "NotFound". */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
