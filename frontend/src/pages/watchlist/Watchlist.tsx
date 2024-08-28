import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowCaseCard from "../../components/show-case-card/ShowCaseCard";
import { getMovies } from "../../components/api-functions/getMovies";
import "./Watchlist.css";

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

const Watchlist = () => {
  const API_BASE_URL = "http://localhost:8080"; // Update with your backend API base URL
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWatchlist = async () => {
      const email = localStorage.getItem("email");
      try {
        const response = await axios.post(`${API_BASE_URL}/get-watchlist`, {
          email,
        });
        const watchlistData = response.data;
        console.log("Watchlist data:", watchlistData);

        // Filter out null values from the watchlist data
        const filteredWatchlist = watchlistData.filter(
          (title: string) => title !== null
        );

        setWatchlist(filteredWatchlist);
      } catch (error) {
        console.error("Error fetching watchlist:", error);
      }
    };

    fetchWatchlist();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const allMovies = await getMovies();
        console.log("All movies:", allMovies);
        const watchlistMovies = allMovies.filter((movie) =>
          watchlist.includes(movie.title)
        );
        setMovies(watchlistMovies);
        console.log("Watchlist movies:", watchlistMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    if (watchlist.length > 0) {
      fetchMovies();
    } else {
      setLoading(false);
    }
  }, [watchlist]);

  return (
    <div className="watchlist">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="watchlist-container">
          <h2>Your Watchlist</h2>
          {movies.length === 0 ? (
            <p>No movies in your watchlist.</p>
          ) : (
            movies.map((movie) => <ShowCaseCard key={movie.id} movie={movie} />)
          )}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
