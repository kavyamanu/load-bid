import React from 'react';
import "./line.scss";

interface LineProps {
  className: string;
}

export const Line: React.FC<LineProps> = ({ className }) => {
  return <hr className={`${className} line`} />;
};
