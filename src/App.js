import "./App.css";
import "./assets/css/home.css";
import "./assets/css/offer.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup"
import Login from "./pages/Login";

 

function App() {
  return (
    <div className="App">
      {/* STRUTURE DU SITE 
  Router is the navigation parent's
Routes contains the page's list
Route is the component that contains the page */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
