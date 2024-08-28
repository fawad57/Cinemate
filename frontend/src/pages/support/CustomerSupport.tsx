import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./CustomerSupport.css";
import { useNavigate } from "react-router-dom";

const CustomerSupport = () => {
  const API_BASE_URL = "http://localhost:8080"; // Update with your backend API base URL

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitQuery = async (data: any) => {
    console.log({ ...data });
    try {
      const response = await axios.post(`${API_BASE_URL}/support`, data);
      console.log("Query submitted successfully:", response.data);

      alert("Your query has been received. We will email you the answer soon.");

      // Clear form or redirect if necessary
    } catch (error) {
      console.error("Query submission failed:", error);
      // Handle query submission failure (e.g., show error message)
    }
    navigate("/");
  };

  return (
    <div className="support">
      <div className="support-container">
        <h2>Customer Support</h2>
        <form className="support-box" onSubmit={handleSubmit(submitQuery)}>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          <div className="input-box">
            <label htmlFor="question">Question</label>
            <textarea
              id="question"
              {...register("question", { required: "Question is required" })}
            ></textarea>
          </div>
          <button className="submit-btn" type="submit">
            Submit Query
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerSupport;
