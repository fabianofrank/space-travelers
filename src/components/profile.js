import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>My Missions</th>
            <th>My Rockets</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">
              {missions.filter((mission) => mission.reserved).map((mission) => (
                <li key={mission.id}>{mission.name}</li>
              ))}
            </td>
            <td>
              {rockets.filter((rocket) => rocket.reserved).map((rocket) => (
                <li key={rocket.id}>{rocket.name}</li>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
