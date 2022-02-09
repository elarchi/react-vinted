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
    <div>
      {/* <img src="" alt="" /> */}
      {/* <div>L'id du produit est : {id}</div> */}
      <p>{data}</p>
    </div>
  );
};

export default Offer;
