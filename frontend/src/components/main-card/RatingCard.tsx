import React from "react";
import movieDbIcon from "../../assets/movieDBicon.jpg"; // Replace with the actual path to your Movie DB icon

interface Props {
  rating: number;
}

const RatingCard: React.FC<Props> = ({ rating }: Props) => {
  return (
    <div className="ratingBox">
      {rating.toFixed(1)}
      <img
        src={movieDbIcon}
        alt="Movie DB Icon"
        style={{ width: "40px", marginRight: "5px", marginLeft: "5px" }}
      />
    </div>
  );
};

export default RatingCard;
