import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContainerRockets from './containerRockets';
import ContainerMissions from './containerMissions';
import ContainerProfile from './containerProfile';
import Navbar from '../components/navbar';
import '../style.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/rockets" element={<ContainerRockets />} />
      <Route exact path="/missions" element={<ContainerMissions />} />
      <Route exact path="/profile" element={<ContainerProfile />} />
    </Routes>
  </Router>
);

export default App;
