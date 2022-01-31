import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <div className="nav">
        <Link to="/missions">Missions</Link>
        <Link to="/rockets">Rockets</Link>
      </div>
    </nav>
  </header>
);

export default Navbar;
