import React, { useState } from 'react';
import './textField.scss';
export interface TextFieldProps {
  initialValue?: string;
  placeholder?: string;
  type?: string;
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({ initialValue, type, placeholder, className }) => {
  const [state, setState] = useState(initialValue);

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={state}
      onChange={(event) => setState(event.target.value)}
    />
  );
};

export { TextField };
