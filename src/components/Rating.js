// Rating.js (new component)

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ defaultRating, onChange }) => {
  const [rating, setRating] = useState(defaultRating);

  const handleStarClick = (value) => {
    setRating(value);
    onChange(value);
  };

  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleStarClick(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
              size={30}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
