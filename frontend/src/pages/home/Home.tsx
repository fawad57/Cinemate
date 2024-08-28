import React, { useState, useEffect, useCallback } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import "./Home.css";
import { getMovies } from "../../components/api-functions/getMovies";
import MainCard from "../../components/main-card/MainCard";
import SearchBar from "../../components/search-bar/SearchBar";
import { FaShare } from "react-icons/fa";
import { LiaHeart, LiaHeartBrokenSolid } from "react-icons/lia";
import ShowCaseCard from "../../components/show-case-card/ShowCaseCard";
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
  // Add more properties as needed
}

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movies2, setMovies2] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const fetchMovies = async () => {
    try {
      const moviesData = await getMovies();
      setMovies(moviesData);
      setMovies2(moviesData);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    //remove movie id from local storage if there is
    localStorage.removeItem("movieId");

    fetchMovies();
  }, []);

  const changeMainSlide = useCallback(() => {
    setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
  }, [movies]);

  useEffect(() => {
    const intervalId = setInterval(changeMainSlide, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [changeMainSlide]);

  const changeSlideManually = (direction: "forward" | "backward") => {
    if (direction === "forward") {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    } else {
      setCurrentMovieIndex(
        (prevIndex) => (prevIndex - 1 + movies.length) % movies.length
      );
    }
  };

  const categories = [
    "All",
    "Action",
    "Comedy",
    "Drama",
    "Romance",
    "Thriller",
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const category = e.currentTarget.textContent as string;
    if (category === "All") {
      fetchMovies();
    } else {
      const filteredMovies = movies.filter((movie) =>
        movie.genres.includes(category)
      );
      setMovies2(filteredMovies);
    }
  };

  const navigate = useNavigate();

  const handleClick2 = (id: number) => {
    //save the id to locl storage
    localStorage.setItem("movie", id.toString());
    console.log("id", id);
    navigate("/booking");
  };

  return (
    <div className="home-container">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <MainCard
            key={movies[currentMovieIndex].id}
            {...movies[currentMovieIndex]}
          />
          <button
            className="left-arrow"
            onClick={() => changeSlideManually("backward")}
          >
            <GoChevronLeft />
          </button>
          <button
            className="right-arrow"
            onClick={() => changeSlideManually("forward")}
          >
            <GoChevronRight />
          </button>
          <div className="lowerCard">
            <div className="upper">
              <div className="lower-btn-container">
                <button
                  className="lower-btn"
                  onClick={() => handleClick2(movies[currentMovieIndex].id)}
                >
                  Book Now
                </button>
                <button
                  className="lower-btn"
                  onClick={() =>
                    window.open(movies[currentMovieIndex].trailerLink, "_blank")
                  }
                >
                  Watch Trailer
                </button>
              </div>
              <div className="reactions">
                <div className="like">
                  <LiaHeart />
                </div>
                Like
                <div className="dislike">
                  <LiaHeartBrokenSolid />
                </div>
                Dislike
                <div className="share">
                  <FaShare />
                </div>
                Share
              </div>
            </div>
            <div className="lower">
              <h1>About Movie</h1>
              <p>{movies[currentMovieIndex].overview}</p>
            </div>
          </div>
          <div className="showcase">
            <SearchBar />
            <div className="categories-btns">
              {categories.map((category) => (
                <button
                  key={category}
                  className="category-btn"
                  onClick={handleClick}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="cards">
              {movies2.map((movie) => (
                <ShowCaseCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
