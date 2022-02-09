import { useParams } from "react-router-dom";
// useful to use the params in the URL

const Offer = () => {
  const { id } = useParams();
  console.log(id);
  return <div>J'ai récupéré l'id : {id}</div>;
};

export default Offer;
