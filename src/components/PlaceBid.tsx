import React from 'react';
import { ReactComponent as Rupee } from '../assets/₹.svg';
import { Button } from './button/Button';
import '../styles/App.scss';
import { Line } from './line/Line';
import { TextField } from './text-field/TextField';

interface FormProps {}

export const Form: React.FC<FormProps> = () => {
  return (
    <form >
      <div className="bid-form">
        <h2>Place Your Load BID</h2>
        <Line className="line-secondary" />
        <div className="cost">
          <Rupee fill="red" stroke="green"/>
          <TextField type="number" placeholder="0" className="no-outline"/>
        </div>

        <div className="cost-button">
          <Button className="secondary selected" type="button">Fixed Price</Button>
          <Button className="secondary" type="button">Rate Negotiable</Button>
        </div>
        <Line className="line-tertiary" />
        <div className="user-details">
        <TextField type="number" placeholder="Enter your mobile number*"/>
        <TextField type="text" placeholder="Enter your name*"/>
        <TextField type="text" placeholder="Enter Remarks (optional)"/>
        </div>
      </div>
      <Button className="primary" type="submit">Bid Now</Button>
    </form>
  );
};
