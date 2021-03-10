import React from 'react';
import { Line } from '../components/line/Line';
import { Form } from '../components/PlaceBid';
import { Vehicle } from '../components/Vehicle';

interface BidProps {}

export const Bid: React.FC<BidProps> = () => {
  return (
    <>
      <div style={{ textAlign: 'center', margin: '30px' }}>
        <h1 style={{ fontSize: '24px', lineHeight: '32px' }}>Old Car Available</h1>
        <Line className="line-primary" />
      </div>
      <div style={{ margin: '20px' }}>
        <Vehicle />
        <Form />
      </div>
    </>
  );
};
