import React from 'react';
import { ReactComponent as Rupee } from '../assets/₹.svg';

interface FormProps {}

export const Form: React.FC<FormProps> = () => {
  return (
    <form>
      <div style={{ padding: '16px', textAlign:'center', display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h2>Place Your Load BID</h2>
        <div style={{ backgroundColor: '#3054D6', height: '3px', width: '60px'}} />
        <div style={{display:"flex",flexDirection : "row", alignItems:"center"}}>
          <Rupee/>
          <input type="number" placeholder="0" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button>Fixed Price</button>
          <button>Rate Negotiable</button>
        </div>
        <hr style={{ borderTop: '3px solid #E7EBEE' }} />
        <input type="number" placeholder="Enter your mobile number*"/>
        <input type="text" placeholder="Enter your name*" />
        <input type="text" placeholder="Enter Remarks (optional)" />
      </div>
      <button style = {{display:"block", margin:"auto"}}>Bid Now</button>
    </form>
  );
};
