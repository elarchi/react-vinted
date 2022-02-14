// IMPORTATIONS ...

// ... du composant Navigate de  react-router-dom

import { useState } from "react";
import { Navigate } from "react-router-dom";

// ... de axios pour faire une requête POST à l'API

import axios from "axios";

const Publish = () =>
  // { token }
  {
    {
      /* si j'ai un token, je return ça : j'ai un token ! 
        si je n'ai pas de token, je return ça : je n'ai pas de token ! 
         */
    }
    const token = 1;
    // cette const permet de vérifier la redirection vers login.

    const [picture, setPicture] = useState();
    // création d'une state pour stocker l'image envoyée par l'user

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [brand, setBrand] = useState();
    const [size, setSize] = useState();
    const [color, setColor] = useState();
    const [state, setState] = useState();
    const [location, setLocation] = useState();
    const [price, setPrice] = useState();

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
      try {
        event.preventDefault();
        setIsLoading(true);
        // le chargement des données user commencent à se charger vers l'API

        const data = new FormData();
        // on crée un objet de type FormData (pour recevoir un file)

        data.append("picture", picture);
        //on ajoute des paires clef/valeur

        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
          {
            title: title,
            description: description,
            price: price,
            condition: state,
            city: location,
            brand: brand,
            size: size,
            color: color,
            picture: picture,
          }
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    return token ? (
      <div className="publish_div ">
        <h2 className="container">Vends ton article</h2>
        {/* formulaire */}
        <div className="publish-form_div">
          <form className="publish_form" onSubmit={handleSubmit}>
            {/* téléchargement des images  */}
            <div className="publish-form-pictures_div">
              <div className="publish-form-pictures-dashes_div">
                <div className="publish-form-pictures-label_div">
                  <label className="publish-form-pictures_label" for="file">
                    ＋ Ajouter une photo
                  </label>
                </div>

                <input
                  type="file"
                  id="file"
                  className="publish-form-pictures_input"
                  // multiple={true}
                  onChange={(event) => {
                    setPicture(event.target.files[0]);
                  }}
                />

                {/* afficher l'image hébergée sur cloudinary
                 */}
                {isLoading ? (
                  <div>Image en cours d'upload...</div>
                ) : (
                  data && <img src={data.secure_url} />
                )}
              </div>
            </div>
            {/* description item */}
            <div className="publish-form-descriptions_div">
              <div className="publish-form-descriptions-title_div">
                <h3>Titre</h3>
                <input
                  className="publish-form-descriptions-title_input"
                  type="text"
                  placeholder="ex: Chemise Séane verte"
                  onClick={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </div>
              <div className="publish-form-descriptions-description_div">
                <h3>Décris ton article</h3>
                <input
                  type="text"
                  placeholder="ex: porté quelquefois, taille correctement"
                  onClick={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </div>
            </div>
            {/* 
            ============ list des détails de l'item ========
            */}
            <div className="publish-form-list_div">
              <div className="publish-form-list-brand_div">
                <h3>Marque</h3>
                <input
                  type="text"
                  placeholder="ex: Zara"
                  onClick={(event) => {
                    setBrand(event.target.value);
                  }}
                />
              </div>
              <div className="publish-form-list-size_div">
                <h3>Taille</h3>
                <input
                  type="text"
                  placeholder="ex: L/40/12"
                  onClick={(event) => {
                    setSize(event.target.value);
                  }}
                />
              </div>
              <div className="publish-form-list-color_div">
                <h3>Couleur</h3>
                <input
                  type="text"
                  placeholder="ex: Fushia"
                  onClick={(event) => {
                    setColor(event.target.value);
                  }}
                />
              </div>
              <div className="publish-form-list-state_div">
                <h3>Etat</h3>
                <input
                  type="text"
                  placeholder="ex: Neuf avec étiquette"
                  onClick={(event) => {
                    setState(event.target.value);
                  }}
                />
              </div>
              <div className="publish-form-list-location_div">
                <h3>Lieu</h3>
                <input
                  type="text"
                  placeholder="ex: Paris"
                  onClick={(event) => {
                    setLocation(event.target.value);
                  }}
                />
              </div>
            </div>
            {/* 
            ============ prix du produit ============ 
            */}

            <div className="publish-form-price_div">
              <h3>Prix</h3>
              <div className="publish-form-price-details_div">
                <input
                  className="publish-form-price-details-value_input"
                  type="text"
                  placeholder="0,00 €"
                />
                <div className="publish-form-price-details-option_div">
                  <input
                    className="publish-form-price-details-option-checkbox_input"
                    type="checkbox"
                    name="Je suis intéressée(e) par les échanges"
                    id=""
                  />
                  <p>Je suis intéressée(e) par les échanges</p>
                </div>
              </div>
            </div>
            {/* 
            ============ submit du form ============  
            */}
            <div className="publish-form-submit_div">
              <button>Ajouter</button>
            </div>
          </form>
        </div>
      </div>
    ) : (
      <div>
        <Navigate to="/login" />
      </div>
    );
  };

export default Publish;
