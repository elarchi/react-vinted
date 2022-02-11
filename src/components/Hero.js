// ... des images du projet:
import banner from "../assets/img/banner.jpg";

const Hero = () => {
  return (
    <div className="banner_div">
      <div className="image-banner_div">
        <img src={banner} alt="Banner vinted absolute" />
        <div className="relative_div"></div>
      </div>
      <div className="title_div">
        <h1>Prêts à faire du tri das vos placards ?</h1>
        <button>Commencer à vendre</button>
      </div>
    </div>
  );
};

export default Hero;
