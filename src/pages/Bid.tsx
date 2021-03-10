import React from 'react';
import { Form } from '../components/Form';
import { Vehicle } from '../components/Vehicle';

interface BidProps {

}

export const Bid: React.FC<BidProps> = () => {
  return (
    <div style={{padding:"20px"}}>
          <Vehicle/>
          <Form/>
    </div>
  );
}

