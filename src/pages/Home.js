import { Link } from "react-router-dom";
import Title from "../components/Title";

const Home = ({ data }) => {
  const id = "9402942095205920520";

  return (
    <div>
      <Title />
      {/* affichage des noms des articles */}

      {data.offers.map((offer, index) => {
        console.log("offer ===>", offer);
        return (
          <Link
            // product_name={offer.product_name}
            to={`/offer/${offer._id}`}
          >
            {offer.product_name}
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
