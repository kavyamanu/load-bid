import React from 'react';
import './card.scss';

export interface CardProps {}

const Card: React.FC<CardProps> = ({ children }) => {
  return <section className="card">{children}</section>;
};

export { Card };
