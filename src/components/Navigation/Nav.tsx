import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HomeIcon } from '@heroicons/react/24/solid';
type Nav = {
  name: string;
  title: string;
  icon: object;
  id: number;
  link: string;
};

const NavLink: Nav[] = [
  {
    name: 'Home',
    title: 'home',
    icon: <HomeIcon />,
    id: uuidv4(),
    link: '/',
  },
];

const Nav = () => {
  return (
    <div>
      {NavLink.map((nav: any) => {
        return (
          <ul key={nav.id}>
            <li>{nav.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Nav;
