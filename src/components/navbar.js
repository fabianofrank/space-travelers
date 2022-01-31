import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../planet.png';

const Navbar = () => (
  <header>
    <nav>
      <div className="logo">
        <img id="logo" src={logo} alt="logo" />
        <h1>SPACE TRAVELER&apos; HUB</h1>
      </div>
      <div className="nav">
        <NavLink activeClassName="selected" to="/">Rockets</NavLink>
        <NavLink activeClassName="selected" to="/missions">Missions</NavLink>
        <NavLink activeClassName="selected" to="/profile">Profile</NavLink>
      </div>
    </nav>
  </header>
);

export default Navbar;
