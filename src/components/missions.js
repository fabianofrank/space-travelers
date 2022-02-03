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
      <table className="table table-striped table-hover">
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
              <td className="fw-bold ml-2">{missions.name}</td>
              <td className="col-12">{missions.description}</td>
              <td>
                {missions.reserved
                  ? (<button type="button" className="btn btn-success">ACTIVE MEMBER</button>)
                  : (<button type="button" className="btn btn-secondary">NOT A MEMBER</button>)}
              </td>
              <td>
                {missions.reserved
                  ? (<button className="btn btn-danger" onClick={() => leaveMission(missions.id)} type="button">Leave Mission</button>)
                  : (<button className="btn btn-primary" onClick={() => joinMission(missions.id)} type="button">Join Mission</button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
