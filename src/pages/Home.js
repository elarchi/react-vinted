import { Link } from "react-router-dom";
import Title from "../components/Title";
// import of axios to do some API's request
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  /*-----------------------------------------------------------------------*/

  //il faut importer de la data de l'API et la stocker:
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  /*-----------------------------------------------------------------------*/
  useEffect(() => {
    // fonction a effectuer à chaque arriver sur la page
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

  /*-----------------------------------------------------------------------*/
  const id = "9402942095205920520";

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <Title />
      {/* affichage des noms des articles */}
      {data.offers.map((offer, index) => {
        return <p>{offer.product_name}</p>;
      })}
      <Link to={`/offer/${id}`}>Go to product with Link</Link>
    </div>
  );
};

export default Home;
