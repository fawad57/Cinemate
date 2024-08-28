import React from "react";
import Form from "./Form";
import "./registration.css";
import logo from "../../assets/logo.png";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const Registration = () => {
  const btns = ["Blog", "Contact", "Browse", "Requests", "Login"];

  return (
    <div className="reg">
      <div className="head-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="heading">Cinemeta</h1>
      </div>
      <Form />
      <div className="foot-btn">
        {btns.map((btn, index) => {
          return (
            <a href="/" key={index} className="btns-low">
              {btn}
            </a>
          );
        })}
      </div>

      <div className="social-icons">
        <FaFacebook size={30} color="#3b5998" />
        <FaTwitter size={30} color="#1da1f2" />
        <FaLinkedin size={30} color="#0077b5" />
      </div>
    </div>
  );
};

export default Registration;
