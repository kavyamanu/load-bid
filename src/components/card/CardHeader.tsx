import React from 'react';

interface CardHeaderProps {
  title: string;
  caption: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ title, caption }) => {
  return (
    <div className="card-header">
      <h2 className="card-header-title">{title}</h2>
      <p className="card-header-caption">{caption}</p>
    </div>
  );
};

