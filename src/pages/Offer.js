// IMPORTATIONS ...

// ... de la librairie de navigation (useParams pour envoyer des params via l'URL):

import { useParams } from "react-router-dom";

// ... de la librairie axios pour faire des requêtes vers l'API:

import axios from "axios";

// .. de useEffect de la librairie react pour mettre en place un chargement lors de la récupération de la data, et de useState pour la stocker:

import { useState, useEffect } from "react";

const Offer = () => {
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
  }, []);
  // Utilisation d'un tab vide dans le useEffet pour effectuer cette action au composant une seule fois, à sa création

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <div className="background-grey_div">
        <div className="offer-content_div container">
          <img src={data.product_image.secure_url} alt={data.product_name} />

          <div className="text-product_div">
            {data.product_details.map((item, index) => {
              const keys = Object.keys(item);
              return (
                <div key={index}>
                  <span>
                    {keys[0]} : {item[keys[0]]}
                  </span>
                </div>
              );
            })}

            <span>{data.product_price} €</span>

            <div className="details-product_div">
              <div className="content-details-product_div">
                {data.product_details.map((detailTitle, index) => {
                  return <span>{detailTitle.MARQUE}</span>;
                })}
              </div>
            </div>
            <span>{data.product_name}</span>
            <span>{data.product_description}</span>
            <span>{data.owner.account.username}</span>
            <button>Acheter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
