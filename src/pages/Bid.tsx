import React from 'react';
import { Vehicle } from '../components/Vehicle';

interface BidProps {

}

export const Bid: React.FC<BidProps> = () => {
  return (
    <div style={{padding:"20px"}}>
          <Vehicle/>
    </div>
  );
}

