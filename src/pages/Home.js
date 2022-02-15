// IMPORTATIONS ...

// .. de la librairie axios pour faire une requête de type POST afin d'envoyer de la data à notre API:

import axios from "axios";

// .. de useEffect de la librairie react pour mettre en place un chargement lors de la récupération de la data, et de useState pour la stocker:

import { useEffect, useState } from "react";

// ... de la librairie de navigation "react-router-dom":

import { Link } from "react-router-dom";

// ... des composants du projet:

import Hero from "../components/Hero";

const Home = ({ params }) => {
  const [data, setData] = useState();
  // state pour stocker de la data

  const [isLoading, setIsLoading] = useState(true);
  // state pour attendre son chargement complet

  const [page, setPage] = useState(1);
  // state pour faire défiler les pages

  const limit = 10;
  // on pose en dur la limit d'item par page.

  useEffect(() => {
    const fetchData = async () => {
      console.log("params ===>", params);
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?limit=${limit}&page=${page}`,
          {
            params: {
              title: params.product_name,
            },
          }
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [page]);
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
          {/* Créons deux bouttons pour faire défiler les item, au clic, les pages défilent en fonction de la limit d'item/page */}
          <button
            className={page === 1 ? "home-no_button" : "home_button"}
            onClick={() => {
              page > 1 && setPage(page - 1);
            }}
          >
            Page précédente
          </button>
          <button
            className="home_button"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Page suivante
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
