import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsFromAPI } from '../redux/missions/missions';
import Mission from './Mission';
import './Missions.css';

function Missions() {
  const missions = useSelector((state) => state.missions);
  return (
    <>
      <div className="h2 d-flex justify-content-center">Our Missions</div>
      <table className="">
        <th>
          <tr> </tr>
        </th>
      </table>
      </>
  );
};

export defaul Missions;
