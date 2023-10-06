import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Icon, NavItem } from "react-materialize";

export default function Navigation({ dark, toggle, largeScreen }) {
  return (
    <div>
      <Navbar
        className='menu'
        alignLinks="right"
        brand={<span className="brand-logo"> Film Cards</span>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
      >
        <ul>
          <li>
            <Link to='/'><Icon left>home</Icon>Home</Link>
          </li>
          <li>
            <Link to='/about'><Icon left>info_outline</Icon>About</Link>
          </li>
          <li>
            <Link to='/news'><Icon left>dvr</Icon>News</Link>
          </li>
          <li>
            <Link to='/contact'><Icon left>contacts</Icon>Contact</Link>
          </li>
        </ul>
      </Navbar>
      <NavItem
        className="btn-toggle-theme"
        offLabel={largeScreen ? 'Light Mode' : ''}
        onLabel={largeScreen ? 'Dark Mode' : ''}
        checked={dark}
        onChange={toggle}
      />
    </div>
  );
}