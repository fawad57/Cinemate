import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./ReviewMovie.css";
import { getMovies } from "../../components/api-functions/getMovies";
import { useNavigate } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
}

const ReviewMovie = () => {
  const API_BASE_URL = "http://localhost:8080"; // Update with your backend API base URL

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const submitReview = async (data: any) => {
    const email = localStorage.getItem("email");

    console.log({ ...data, email });
    try {
      const response = await axios.post(`${API_BASE_URL}/reviews`, {
        ...data,
        email,
      });
      console.log("Review submitted successfully:", response.data);
      alert("Review submitted successfully");

      // Handle successful review submission (e.g., show success message, redirect)
    } catch (error) {
      console.error("Review submission failed:", error);
      // Handle review submission failure (e.g., show error message)
    }
    navigate("/");
  };

  return (
    <div className="review">
      <div className="review-container">
        <h2>Review a Movie</h2>
        <form className="review-box" onSubmit={handleSubmit(submitReview)}>
          <div className="input-box">
            <label htmlFor="ticketNumber">Ticket Number</label>
            <input
              type="text"
              id="ticketNumber"
              {...register("ticketNumber", {
                required: "Ticket number is required",
              })}
            />
          </div>
          <div className="input-box">
            <div className="input-box">
              <label htmlFor="movie">Select Movie</label>
              <select id="movie" {...register("movieName")}>
                {movies.map((movie) => (
                  <option key={movie.title} value={movie.title}>
                    {movie.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="feedback">Feedback</label>
            <textarea
              id="feedback"
              {...register("feedback", { required: "Feedback is required" })}
            ></textarea>
          </div>
          <button className="submit-btn" type="submit">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewMovie;
