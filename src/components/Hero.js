// IMPORTATIONS ...

// ... des images du projet:

import banner from "../assets/img/banner.jpg";
import tornEffect from "../assets/img/tornEffect.svg";

// ... de la librairie de navigation "react-router-dom":

import { Link } from "react-router-dom";

// COMPOSANT HERO

const Hero = () => {
  return (
    <div className="hero_div">
      <div className="hero-pictures_div">
        <img
          className="hero-tornEffect_img"
          src={tornEffect}
          alt="torn effect"
        />
        <img
          className="hero-mainPicture_img"
          src={banner}
          alt="Banner vinted"
        />
      </div>

      <div className="hero-title_div">
        <h1>Prêts à faire du tri dans vos placards ?</h1>
        <div className="hero-title-button_div">
          <Link className="hero_link" to="/">
            Commencer à vendre
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
