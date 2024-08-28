import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Payment.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const API_BASE_URL = "http://localhost:8080"; // Update with your backend API base URL

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitPayment = async (data: any) => {
    const bookingNumber = parseInt(localStorage.getItem("bookingNumber")!);
    if (!bookingNumber) {
      alert("Booking number not found. Please complete your booking first.");
      return;
    }
    console.log({ ...data, bookingNumber });

    try {
      const response = await axios.post(`${API_BASE_URL}/payment`, {
        ...data,
        bookingNumber,
      });
      console.log("Payment successful:", response.data);
      alert("Payment successful");
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment failed");
    }

    navigate("/");
  };

  return (
    <div className="payment">
      <h2>Payment Details</h2>
      <form className="payment-box" onSubmit={handleSubmit(submitPayment)}>
        <div className="input-box">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            {...register("cardNumber", { required: "Card Number is required" })}
          />
        </div>
        <div className="input-box">
          <label htmlFor="cardName">Card Name</label>
          <input
            type="text"
            id="cardName"
            {...register("cardName", { required: "Card Name is required" })}
          />
        </div>
        <div className="input-box">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            placeholder="MM/YY"
            {...register("expiryDate", { required: "Expiry Date is required" })}
          />
        </div>
        <div className="input-box">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            {...register("cvv", { required: "CVV is required" })}
          />
        </div>
        <button className="pay-btn" type="submit">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
