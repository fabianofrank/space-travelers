import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../planet.png';

const Navbar = () => (
  <header>
    <nav className="d-flex align-items-center pb-4 border-bottom">
      <div className="logo">
        <img id="logo" src={logo} alt="logo" />
        <h1>SPACE TRAVELER&apos; HUB</h1>
      </div>
      <div className="nav">
        <NavLink className="navbar-links" to="/">Rockets</NavLink>
        <NavLink className="navbar-links" to="/missions">Missions</NavLink>
        <NavLink className="navbar-links" to="/profile">Profile</NavLink>
      </div>
    </nav>
  </header>
);

export default Navbar;
