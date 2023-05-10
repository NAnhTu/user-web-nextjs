import React from 'react';
type CardProps = {
  children: React.ReactNode;
};
const Card = ({children}: CardProps) => {
  return (
    <div className="flex flex-col justify-start items-start p-4 rounded-lg mb-4 shadow-xl">
      {children}
    </div>
  );
};

export default Card;
