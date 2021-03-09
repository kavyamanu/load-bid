import React from 'react';
import { ReactComponent as Group } from '../assets/Group 15945.svg';
import { ReactComponent as Path } from '../assets/Path 25988.svg';
import { ReactComponent as Payment } from '../assets/payment.svg';
import { ReactComponent as Less } from '../assets/less.svg';
import Profile from '../assets/Profile/drawable-mdpi/Profile.png';

interface VehicleProps {}

export const Vehicle: React.FC<VehicleProps> = () => {
  return (
    <section
      style={{ boxShadow: '#90909066 0px 0px 30px', border: '#0A22391F 1px', borderRadius: '6px' }}
    >
      <div style={{ backgroundColor: '#202942' }}>
        <h2>Honda City</h2>
        <p>Posted at 1 Nov, 9.30 AM</p>
      </div>
      <div style={{ padding: '20px' }}>
        <ul>
          <li>
            <Group />
            Specification 01
          </li>
          <li>
            <Path />
            Specification 02
          </li>
          <li>
            <Payment />
            Specification 03
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
      <div style={{ backgroundColor: '#2355FC0F', color: '#194DFF', textAlign: 'center' }}>
        <button>
          Hide Details
          <Less />
        </button>
      </div>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'row' }}>
        <img src={Profile} alt="Profile" />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '12px' }}>
          <h3>Rohan Sharma</h3>
          <p>Bengaluru, Karnataka</p>
        </div>
      </div>
    </section>
  );
};

