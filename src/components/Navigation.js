import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Icon, NavItem } from "react-materialize";
import { Switch } from '@mui/material';
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div>
      <Navbar
        className='menu'
        alignLinks="right"
        brand={<span className="brand-logo"><Link to='/' style={{color:theme.color}}><Icon style={{ fontSize: 36, color: theme.color }}>movie_creation</Icon>Sang Cinema</Link></span>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        >
        <ul>
          <li>
            <Link to='/'style={{ color: theme.color }}><Icon left>home</Icon>Home</Link>
          </li>
          <li>
            <Link to='/about' style={{ color: theme.color }}><Icon left>info_outline</Icon>About</Link>
          </li>
          <li>
            <Link to='/news'style={{ color: theme.color }}><Icon left>dvr</Icon>News</Link>
          </li>
          <li>
            <Link to='/contact'style={{ color: theme.color }}><Icon left>contacts</Icon>Contact</Link>
          </li>
          <li>
          <div style={{ position: "relative" }}>
            <a
              className="switch-mode"
              href="#"
              onClick={toggle}
              style={{                
                color: theme.color1,
                outline: "none",
              }}
              data-testid="toggle-theme-btn"
            >
              Switch to {!dark ? "Dark" : "Light"} mode
            </a>
          </div>
        </li>
        </ul>
      </Navbar>

    </div>
  );
}