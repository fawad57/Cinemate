import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./ShareMovie.css";
import { getMovies } from "../../components/api-functions/getMovies";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  trailerLink: string;
  backdrop_path: string;
  genres: string[];
  overview: string;
  duration: number;
  rating: number;
  tagline: string;
  language: string;
  poster: string;
}

const ShareMovie = () => {
  const API_BASE_URL = "http://localhost:8080"; // Update with your backend API base URL
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (email: string, movie: Movie) => {
    // Simulate sending an email
    console.log(`Sending email to ${email} with movie details:`, movie);
    alert(`Movie details for "${movie.title}" have been shared with ${email}.`);
  };

  //send data to server

  const submitShare = (data: any) => {
    const selectedMovie = movies.find(
      (movie) => movie.id === parseInt(data.movieId)
    );

    const email1 = localStorage.getItem("email");
    const { email } = data;

    console.log({
      receiving_email: email,
      sending_email: email1,
    });

    if (selectedMovie) {
      axios
        .post(`${API_BASE_URL}/share`, {
          receiving_email: email,
          sending_email: email1,
          movieName: selectedMovie.title,
        })
        .then((response) => {
          console.log("Movie shared successfully:", response.data);
          sendEmail(data.email, selectedMovie);
          console.log({ ...data, email, movie: selectedMovie.title });
        })
        .catch((error) => {
          console.error("Movie sharing failed:", error);
          // Handle movie sharing failure (e.g., show error message)
        });
      navigate("/");
    }
  };

  return (
    <div className="share-movie">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="share-movie-container">
          <h2>Share a Movie</h2>
          <form
            className="share-movie-box"
            onSubmit={handleSubmit(submitShare)}
          >
            <div className="input-box">
              <label htmlFor="email">Recipient's Email</label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            <div className="input-box">
              <label htmlFor="movie">Select Movie</label>
              <select id="movie" {...register("movieId")}>
                {movies.map((movie) => (
                  <option key={movie.id} value={movie.id}>
                    {movie.title}
                  </option>
                ))}
              </select>
            </div>
            <button className="submit-btn" type="submit">
              Share Movie
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShareMovie;
