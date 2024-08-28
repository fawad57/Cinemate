import React from "react";
import "./MainCard.css";
import InfoCard from "./InfoCard";
import RatingCard from "./RatingCard";

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
  // Add more properties as needed
}

const MainCard = (data: Movie) => {
  return (
    <>
      <div
        className="main-card"
        style={{ backgroundImage: `url(${data.backdrop_path})` }}
      >
        <RatingCard rating={data.rating} />
        <InfoCard
          key={data.id}
          id={data.id}
          name={data.title}
          language={data.language}
          genres={data.genres}
          time={data.duration}
        />
        <p className="tagline">{data.tagline}</p>
      </div>
    </>
  );
};

export default MainCard;
