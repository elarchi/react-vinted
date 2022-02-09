// useful to use the params in the URL
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Offer = () => {
  //il faut importer de la data de l'API et la stocker:
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  console.log("L'id du produit est :", id);

  useEffect(() => {
    // fonction a effectuer à chaque arrivée sur la page
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
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
    <div className="offer-content_div">
      <img src={data.product_image.secure_url} alt={data.product_name} />
      {/* <div>L'id du produit est : {id}</div>
      <span>{data.product_name}</span> */}
      <div className="text-product_div">
        <span>{data.product_price} €</span>
        <div className="details-product_div">
          <div className="title-details-product_div">
            <span>MARQUE</span>
            <span>TAILLE</span>
            <span>ETAT</span>
            <span>COULEUR</span>
            <span>EMPLACEMENT</span>
            <span>MODE DE PAIEMENT</span>
          </div>
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
  );
};

export default Offer;
