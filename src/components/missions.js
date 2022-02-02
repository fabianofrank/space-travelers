import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, updateMissions } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const toggleReservation = (value = false, e) => {
    const newState = missions.map((mission) => {
      if (mission.id !== e.target.parentElement.parentElement.id) return mission;
      return { ...mission, reserved: value };
    });
    return newState;
  };

  const joinMission = (e) => {
    dispatch(updateMissions(toggleReservation(true, e)));
  };

  const leaveMission = (e) => {
    dispatch(updateMissions(toggleReservation(false, e)));
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
                  ? (<button onClick={leaveMission} type="button">Leave Mission</button>)
                  : (<button onClick={joinMission} type="button">Join Mission</button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
