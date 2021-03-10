import React, { FC, SVGProps } from 'react';
import './list.scss';

export interface ListProps {
  items: Item[];
}
export interface Item {
  icon: FC<SVGProps<SVGSVGElement>>;
  description: string;
}
const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <li key={index} className="list-item">
            <Icon className="list-item-icon" />
            <h3 className="list-item-description">{item.description}</h3>
          </li>
        );
      })}
    </ul>
  );
};

export { List };
