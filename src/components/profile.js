import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);

  return (
    <div>
      <div>
        <div>
          <h3>My Missions</h3>
          <ul>
            {missions.filter((mission) => mission.reserved).map((mission) => (
              <li key={mission.id}>{mission.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>My Rockets</h3>
          <ul>
            {rockets.filter((rocket) => rocket.reserved).map((rocket) => (
              <li key={rocket.id}>{rocket.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
