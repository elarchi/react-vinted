// IMPORTATIONS ...

// ... react

import { useState } from "react";

//... react-stripe

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

// ... axios

import { axios } from "axios";

const CreditCardForm = ({ title, amount, token }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);

    const stripeResponse = await stripe.createToken(cardElement, {
      name: "L'id de l'acheteuse/acheteur",
    });

    console.log("stripeResponse ===>", stripeResponse);

    const stripeToken = stripeResponse.token.id;

    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/payment",
      {
        token: stripeToken,
        title: title,
        amount: amount,
      }
    );

    console.log("response.data ===>", response.data);

    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };

  return (
    <div>
      {!completed ? (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit">Payer</button>
        </form>
      ) : (
        <span>Paiement effectué !</span>
      )}
    </div>
  );
};

export default CreditCardForm;
