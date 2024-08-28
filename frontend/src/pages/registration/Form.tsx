import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert } from "@mui/material";
import axios from "axios"; // Add axios for HTTP requests
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:8080"; // Update with your backend API base URL

const Form = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
        "Password must contain at least one number and one special character"
      )
      .required("Password is required"),
    user: yup.string().required("User name is required"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords must match")
      .required("Password confirm is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [login, setLogin] = useState(true);
  const loginLine = "Get Login to Access your Account";
  const signupLine = "Get Started with your Account";

  const submitLogin = async (data: any) => {
    console.log(data);

    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email: data.email,
        password: data.password,
      });
      console.log("Login successful:", response.data);
      localStorage.setItem("email", data.email); // Store email in local storage
      alert("Login successful");
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed");
    }
  };

  const submitSignUp = async (data: any) => {
    console.log(data);
    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, {
        email: data.email,
        password: data.password,
        name: data.user,
      });
      console.log("Signup successful:", response.data);
      alert("Signup successful");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed");
    }
  };

  return (
    <div className="form-container">
      <div className="toggle">
        <button
          className={login ? "btn-toggle active" : "btn-toggle"}
          onClick={() => {
            if (!login) setLogin(true);
          }}
        >
          Login
        </button>
        <div className="div"></div>
        <button
          className={!login ? "btn-toggle active" : "btn-toggle"}
          onClick={() => {
            if (login) setLogin(false);
          }}
        >
          Sign Up
        </button>
      </div>
      {login ? (
        <form className="form" onSubmit={handleSubmit(submitLogin)}>
          <p className="line">{loginLine}</p>
          <div className="inputbox">
            <input type="text" placeholder="Email" {...register("email")} />
            <MdEmail className="eico" />
            <p className="errors-msg">{errors.email?.message}</p>
          </div>
          <div className="inputbox">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <IoIosLock className="pico" />
            <p className="errors-msg">{errors.password?.message}</p>
          </div>
          <div className="form-rem">
            <input type="radio" />
            <label>Remember me</label>
          </div>
          <button className="btn" type="submit">
            Sign in
          </button>
          <a href="#">Forgot password?</a>
        </form>
      ) : (
        <form className="form" onSubmit={handleSubmit(submitSignUp)}>
          <p className="line">{signupLine}</p>
          <div className="inputbox">
            <input type="text" placeholder="Email" {...register("email")} />
            <MdEmail className="eico" />
            <p className="errors-msg">{errors.email?.message}</p>
          </div>
          <div className="inputbox">
            <input type="text" placeholder="Name" {...register("user")} />
            <p className="errors-msg">{errors.user?.message}</p>
          </div>
          <div className="inputbox">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <IoIosLock className="pico" />
            <p className="errors-msg">{errors.password?.message}</p>
          </div>
          <div className="inputbox">
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirm")}
            />
            <p className="errors-msg">{errors.confirm?.message}</p>
          </div>
          <button className="btn" type="submit">
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
