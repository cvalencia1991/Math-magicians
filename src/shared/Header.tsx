import React from 'react';
import { NavLink } from 'react-router-dom';

type LinkType = {
  id: number;
  path: string;
  text: string;
};

const Header = () => {
  const links: LinkType[] = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];

  return (
    <header>
      <nav className="navBar">
        <div className="Tittle">Math Magicians</div>
        <ul className="menuNav">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
