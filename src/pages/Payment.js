// IMPORTATIONS ...

// ... des éléments de react-stripe-js pour faire fonctionner notre partie paiment

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CreditCardForm from "../components/CreditCardForm";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({ token, title, amount }) => {
  return (
    <div className="payment_div">
      <form action="" className="payment_form">
        <h2>Résumé de la commande</h2>

        {/* 
        ===================================================== SECTION DETAIL COMMANDE & TAXES
        */}
        <div className="payment-form-details_div">
          <div className="payment-form-details-order_div">
            <h3>Commande</h3>
          </div>
          <div className="payment-form-details-protectionFee_div">
            <h3>Frais protection acheteuses/acheteurs</h3>
          </div>
          <div className="payment-form-details-shipingFees_div">
            <h3>Frais de port</h3>
          </div>
        </div>
        {/* 
        ===================================================== SECTION TOTAL
        */}
        <div className="payment-form-totalSection_div">
          <div className="payment-form-totalSection-title_div">
            <h4>Total</h4>
          </div>
          <p>
            Il ne vous reste plus qu'une étape pour vous offrir XXXX. Vous allez
            payer XXXX (frais de protection et frais de port inclus).
          </p>
        </div>
        {/* 
        ===================================================== SECTION CARD 
        */}
        <Elements stripe={stripePromise}>
          <CreditCardForm token={token} title={title} amount={amount} />
        </Elements>
        {/* 
        ===================================================== SECTION SUBMIT 
        */}
        {/* <input type="submit" value="Pay" /> */}
      </form>
    </div>
  );
};

export default Payment;
