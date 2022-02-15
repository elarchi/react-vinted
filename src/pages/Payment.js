// IMPORTATIONS ...

// ... des éléments de react-stripe-js pour faire fonctionner notre partie paiment

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CreditCardForm from "../components/CreditCardForm";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Payment = () => {
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

  const location = useLocation();
  const { title, amount, token } = location.state;

  const [paymentDone, setPaymentDone] = useState();

  const protectionFees = (amount / 10).toFixed(2);
  const shippingFees = (amount / 20).toFixed(2);
  const total = (
    Number(protectionFees) +
    Number(shippingFees) +
    Number(amount)
  ).toFixed(2);

  return (
    <div className="payment-background_div">
      <div className="payment_div container">
        <h2>Résumé de la commande</h2>

        {/* 
        ===================================================== SECTION DETAIL COMMANDE & TAXES
        */}
        <div className="payment-details_div">
          <div className="payment-details-order_div">
            <h3>Commande</h3>
            <span>{amount}</span>
          </div>
          <div className="payment-details-protectionFees_div">
            <h3>Frais protection acheteuses/acheteurs</h3>
            <span>{protectionFees}</span>
          </div>
          <div className="payment-details-shippingFees_div">
            <h3>Frais de port</h3>
            <span>{shippingFees}</span>
          </div>
        </div>
        {/* 
        ===================================================== SECTION TOTAL
        */}
        <div className="payment-totalSection_div">
          <div className="payment-totalSection-title_div">
            <h4>Total</h4>
            <span>{total}</span>
          </div>
          <p>
            `Il ne vous reste plus qu'une étape pour vous offrir{" "}
            <span>{title}</span>. Vous allez payer <span>{amount} €</span>{" "}
            (frais de protection et frais de port inclus).``
          </p>
        </div>
        {/* 
        ===================================================== SECTION CARD 
        */}
        {paymentDone ? (
          <p>Le paiement a bien été effectué !</p>
        ) : (
          <Elements stripe={stripePromise}>
            <CreditCardForm
              token={token}
              title={title}
              amount={amount}
              setPaymentDone={setPaymentDone}
            />
          </Elements>
        )}

        {/* 
        ===================================================== SECTION SUBMIT 
        */}
        {/* <input type="submit" value="Pay" /> */}
      </div>
    </div>
  );
};

export default Payment;
