import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
// import of axios to do some API's request
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
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

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      {/* STRUTURE DU SITE 
  Router is the navigation parent's
Routes contains the page's list
Route is the component that contains the page */}
      <Router>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/offer/:id" element={<Offer data={data} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
