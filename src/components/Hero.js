// IMPORTATIONS ...

// ... des images du projet:
import banner from "../assets/img/banner.jpg";
import tornEffect from "../assets/img/tornEffect.svg";

const Hero = () => {
  return (
    <div className="hero_div">
      <img className="hero-mainPicture_img" src={banner} alt="Banner vinted" />

      <div className="hero-title_div">
        <h1>Prêts à faire du tri dans vos placards ?</h1>
        <button>Commencer à vendre</button>
      </div>

      <img
        className="hero-tornEffect_img"
        src={tornEffect}
        alt="picture torn effect"
      />
    </div>
  );
};

export default Hero;
