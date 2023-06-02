import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HomeIcon, LockOpenIcon, UserPlusIcon } from '@heroicons/react/24/solid';
type Nav = {
  name: string;
  title: string;
  icon: object;
  id: string;
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

  {
    name: 'Register',
    title: 'register',
    icon: <UserPlusIcon />,
    id: uuidv4(),
    link: '/register',
  },

  {
    name: 'Login',
    title: 'login',
    icon: <LockOpenIcon />,
    id: uuidv4(),
    link: '/login',
  },
];

const Nav = (): React.ReactNode => {
  return (
    <ul className='nav nav-tabs bg-warning'>
      {NavLink.map((nav) => {
        return (
          <li
            title={nav.title}
            className='nav-item'
            key={nav.id}
          >
            <a
              href={nav.link}
              className='nav-link  text-black'
            >
              {' '}
              {nav.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
