import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <div>
      <div>
        {rockets.map((rockets) => (
          <div key={rockets.id}>
            <img src={rockets.image} alt="rocket" />
            <ul>
              <li>{rockets.name}</li>
              <li>{rockets.description}</li>
              <li>{rockets.name}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
