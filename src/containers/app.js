import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContainerRockets from './containerRockets';
import ContainerMissions from './containerMissions';
import ContainerProfile from './containerProfile';
import Navbar from '../components/navbar';
import '../style.css';
import { fetchRockets } from '../redux/rockets/rockets';
import { fetchMissions } from '../redux/missions/missions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ContainerRockets />} />
        <Route exact path="/missions" element={<ContainerMissions />} />
        <Route exact path="/profile" element={<ContainerProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
