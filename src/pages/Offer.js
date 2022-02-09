import { useParams } from "react-router-dom";
// useful to use the params in the URL

const Offer = ({ data }) => {
  const { id } = useParams();
  console.log("L'id du produit est :", id);

  return (
    <div>
      <img src="" alt="" />
      <div>
        L'id de {data.offers.product_name} est : {id}
      </div>
    </div>
  );
};

export default Offer;
