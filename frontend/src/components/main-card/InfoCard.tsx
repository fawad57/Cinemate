import React from "react";

interface info {
  id: number;
  name: string;
  language: string;
  genres: string[];
  time: number;
}

const infoCard = (data: info) => {
  return (
    <div className="info-card">
      <div className="name-container">
        <h1>{data.name}</h1>
      </div>
      <div className="rest-container">
        <h3>{data.id !== 458156 ? data.language : "English"}</h3>
        <div className="circle"></div>
        <h3>{data.genres.join(", ")}</h3>
      </div>
      <h4 className="time">{data.time} minutes</h4>
    </div>
  );
};

export default infoCard;
//458156
