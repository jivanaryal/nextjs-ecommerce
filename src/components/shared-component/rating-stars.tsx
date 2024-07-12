"use client";
import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

type Props = {
  rating: number;
};

// 4.5

//3.5

//4.0

const TOTAL_STARS_COUNT = 5;

const RatingStars = ({ rating }: Props) => {
  const fullStarLength = Math.floor(rating);

  const emptyStarLength = TOTAL_STARS_COUNT - Math.ceil(rating);

  const halfStarLength = TOTAL_STARS_COUNT - fullStarLength - emptyStarLength;

  return (
    <div className="flex">
      {new Array(fullStarLength).fill("_").map((_, index) => (
        <FaStar key={index} className="text-yellow-500" />
      ))}
      {new Array(halfStarLength).fill("_").map((_, index) => (
        <FaStarHalfAlt key={index} className="text-yellow-500" />
      ))}
      {new Array(emptyStarLength).fill("_").map((_, index) => (
        <FaRegStar key={index} />
      ))}
    </div>
  );
};

export default RatingStars;
