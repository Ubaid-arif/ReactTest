import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { getPayment } from "../../../api";

// Load the Stripe instance with your public key
const stripePromise = loadStripe(
  "pk_test_51PzNa7KdBh6BzjXV03AuNMV2dhuoa83r8o4Y95nqbnarWPrugeSXrMXWNmXbMgCDeSBUfgVyvV98seyPiSIRZBuT00QZ2eDrei"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    // Create a Payment Method instead of Token
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      console.log("paymentMethod--->", paymentMethod);
      // Send paymentMethod to your backend
      const response = await getPayment();
      console.log("response---->", response);

      if (response.success) {
        setLoading(false);
        console.log("Payment successful");
      } else {
        setError("Payment failed");
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Complete your payment</h2>
      <CardElement className="card-element" />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="pay-button"
      >
        {loading ? "Processing..." : "Pay"}
      </button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};

const PaymentPage = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default PaymentPage;
