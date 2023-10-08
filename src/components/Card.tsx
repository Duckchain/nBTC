import React from 'react';

interface CardProps {
  id: number;
  title: string;
  image: string; 
  description: string;
}

const Card: React.FC<CardProps> = ({ id, title, image, description }) => {
  const imagePath = `images/${image}`;

  return (
    <div className="card max-w-[545px] w-full">
      <img src={imagePath} alt={title} />
      <h2 className="header">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;