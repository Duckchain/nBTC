import React from 'react';

interface CardProps {
  id: number;
  title: string;
  image: string; 
  description: string;
}

const Card: React.FC<CardProps> = ({ id, title, image, description }) => {
  const imagePath = `/assets/images/${image}`;

  return (
    <div className="card">
      <img src={imagePath} alt={title} />
      <h2 className='header'>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;