import React, { useState } from 'react';
import { ReactComponent as Group } from '../assets/Group 15945.svg';
import { ReactComponent as Path } from '../assets/Path 25988.svg';
import { ReactComponent as Payment } from '../assets/payment.svg';
import { ReactComponent as Less } from '../assets/less.svg';
import { ReactComponent as More } from '../assets/More.svg';
import Profile from '../assets/Profile/drawable-mdpi/Profile.png';
import { Card } from './card/Card';
import { CardHeader } from './card/CardHeader';
import { Item, List } from './list/List';
import { CardContent } from './card/CardContent';
import { Button } from './button/Button';

interface VehicleProps {}

export const Vehicle: React.FC<VehicleProps> = () => {
  const items: Item[] = [
    { description: 'Specification 01', icon: Group },
    { description: 'Specification 02', icon: Path },
    { description: 'Specification 03', icon: Payment },
  ];
  const [toggle, setToggle] = useState(false);
  return (
    <Card>
      <CardHeader title="Honda City" caption="Posted at 1 Nov, 9.30 AM" />
      <CardContent>
        <List items={items} />
        <div className="more-details">
          {toggle && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          )}
          <div className="toggle">
            <Button className="tertiary" onClick = {()=>{setToggle(!toggle)}}>
              {toggle ? (
                <>
                  Hide Details <Less className="icon" />
                </>
              ) : (
                <>
                  Show Details <More className="icon" />
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>

      <div className="profile">
        <img src={Profile} alt="Profile" style={{ height: '36px', width: '36px' }} />
        <div className="details">
          <h3>Rohan Sharma</h3>
          <p>Bengaluru, Karnataka</p>
        </div>
      </div>
    </Card>
  );
};
