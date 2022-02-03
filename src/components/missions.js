import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMissions } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const joinMission = (id) => {
    dispatch(updateMissions(id));
  };

  const leaveMission = (id) => {
    dispatch(updateMissions(id));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join/Leave</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((missions) => (
            <tr key={missions.id} id={missions.id}>
              <td>{missions.name}</td>
              <td>{missions.description}</td>
              {missions.reserved
                ? (<td>ACTIVE MEMBER</td>)
                : (<td>NOT A MEMBER</td>)}
              <td>
                {missions.reserved
                  ? (<button onClick={() => leaveMission(missions.id)} type="button">Leave Mission</button>)
                  : (<button onClick={() => joinMission(missions.id)} type="button">Join Mission</button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
