import React from "react";
import "./ShowCaseCard.css";
import { IoTicket } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  // Add more properties as needed
}

interface props {
  movie: Movie;
}

const API_BASE_URL = "http://localhost:8080"; // Update with your backend API base URL

const ShowCaseCard = ({ movie }: props) => {
  const navigate = useNavigate();

  const watchlist = () => {
    const email = localStorage.getItem("email");

    axios
      .post(`${API_BASE_URL}/watchlist`, {
        movieName: movie.title,
        email: email,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  const handleClick = (id: number) => {
    //save the id to locl storage
    localStorage.setItem("movie", movie.id.toString());
    console.log("id", id);
    navigate("/booking");
  };

  if (!movie) return <div>Loading...</div>;

  const isHomeRoute = window.location.pathname === "/";

  return (
    <div className="movie-card">
      <div className="ratingbox">{movie.rating.toFixed(1)}</div>
      <div className="img-container">
        <img className="poster-img" src={movie.poster} alt={movie.title} />
      </div>
      <div className="info-container">
        <div className="card-title">
          {" "}
          <h3>{movie.title}</h3>
        </div>

        <div className="genres">
          {movie.genres[1]
            ? movie.genres[0] + " | " + movie.genres[1]
            : movie.genres[0]}
          {isHomeRoute && (
            <>
              <button className="bookbtn" onClick={() => handleClick(movie.id)}>
                <IoTicket />
              </button>
              <button className="button-watchlist" onClick={watchlist}>
                +
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowCaseCard;
