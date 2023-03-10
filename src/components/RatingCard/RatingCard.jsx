import React from 'react';

function RatingCard({ image, name, description }) {
  return (
    <div>
      <figure>
        <img src={image} alt='user' />
      </figure>
      <span>{name}</span>
      <span>{description}</span>
    </div>
  );
}

export default RatingCard;
