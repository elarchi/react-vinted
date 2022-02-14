// IMPORTATIONS ...

// .. de la librairie axios pour faire une requête de type POST afin d'envoyer de la data à notre API:

import axios from "axios";

// .. de useEffect de la librairie react pour mettre en place un chargement lors de la récupération de la data, et de useState pour la stocker:

import { useEffect, useState } from "react";

// ... de la librairie de navigation "react-router-dom":

import { Link } from "react-router-dom";

// ... des composants du projet:

import Hero from "../components/Hero";

const Home = ({}) => {
  const [data, setData] = useState();
  // state pour stocker de la data

  const [isLoading, setIsLoading] = useState(true);
  // state pour attendre son chargement complet

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  // on utilise un tab vide dans le useEffet pour effectuer cette action au composant une seule fois, à sa création

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <Hero />
      {/* affichage des noms des articles */}
      <div className="home-content_div">
        <div className="home-items_div container">
          {data.offers.map((offer) => {
            // console.log("offer ===>", offer);
            console.log(
              "offer.product_pictures.url===>",
              offer.product_pictures.url
            );
            return (
              <Link
                className="home_link"
                key={offer._id}
                to={`/offer/${offer._id}`}
              >
                <div className="home-item_div">
                  <div className="home-item-user_div">
                    {offer.owner.account.avatar && (
                      <img
                        className="home-item-avatar_img"
                        src={offer.owner.account.avatar.secure_url}
                        alt=""
                      />
                    )}
                    <span span> {offer.owner.account.username}</span>
                  </div>

                  <img
                    className="home-item-product_img"
                    src={offer.product_image.secure_url}
                    alt={offer.product_name}
                  />
                  <div className="home-item-details_div">
                    <span className="home-item-details-price_span">
                      {offer.product_price} €
                    </span>
                    {offer.product_details.map((elem, index) => {
                      return (
                        <div key={index}>
                          <span>{elem.TAILLE}</span>
                          <span>{elem.MARQUE}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
