import React from 'react';

interface CardContentProps {}

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div className="card-content">{children}</div>;
};
