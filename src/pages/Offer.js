// IMPORTATIONS ...

// ... de la librairie de navigation (useParams pour envoyer des params via l'URL):

import { useParams } from "react-router-dom";

// ... de la librairie axios pour faire des requêtes vers l'API:

import axios from "axios";

// .. de useEffect de la librairie react pour mettre en place un chargement lors de la récupération de la data, et de useState pour la stocker:

import { useState, useEffect } from "react";

// ... de la librairie de navigation "react-router-dom":

import { Link } from "react-router-dom";

const Offer = ({ token }) => {
  const [data, setData] = useState();
  // Pour stoker de la data

  const [isLoading, setIsLoading] = useState(true);
  // Pour attendre le chargement complet du la database

  const { id } = useParams();
  console.log("L'id du produit est :", id);
  // Transfert de l'id de l'offre en params dans l'URL. On stocke désormais sa valeur dans une const "id"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // Placement de la const de manière dynamique dans l'URL
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);
  // Utilisation d'un tab vide dans le useEffet pour effectuer cette action au composant une seule fois, à sa création

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <div className="offer_div">
        <div className="offer-picture_div">
          <img
            className="offer_img"
            src={data.product_image.secure_url}
            alt={data.product_name}
          />
        </div>

        <div className="offer-infos_div  ">
          <span className="offer-infos-price_span ">
            {data.product_price} €
          </span>

          <div className="offer-infos-list_div">
            <div className="offer-infos-list-leftSide_div">
              {data.product_details.map((elem, index) => {
                const keys = Object.keys(elem);
                return (
                  <div key={index}>
                    <div>
                      <span>{keys[0]}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="offer-infos-list-rightSide_div">
              {data.product_details.map((elem, index) => {
                const keys = Object.keys(elem);
                return (
                  <div key={index}>
                    <div>
                      <span>{elem[keys[0]]}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <span className="offer-infos-name_span">{data.product_name}</span>
          <div className="offer-infos-descriptions_div">
            <span>{data.product_description}</span>
            <div className="offer-infos-user_div">
              {data.owner.account.avatar && (
                <img
                  className="offer-infos-avatar_img"
                  src={data.owner.account.avatar.secure_url}
                  alt="avatar's user"
                />
              )}

              <span>{data.owner.account.username}</span>
            </div>
          </div>
          <div className="offer-infos-button_div">
            <Link
              className="offer-infos_button"
              to={token ? "/payment" : "/login"}
              state={{
                title: data.product_name,
                amount: data.product_price,
                token: token,
              }}
            >
              Acheter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
