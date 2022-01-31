// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ContainerRockets from './containerRockets';
import ContainerMissions from './containerMissions';
import Navbar from '../components/navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/rockets" element={<ContainerRockets />} />
      <Route exact path="/missions" element={<ContainerMissions />} />
    </Routes>
  </Router>
);

export default App;
