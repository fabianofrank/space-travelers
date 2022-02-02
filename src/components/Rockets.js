import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, updateRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const handleReservation = (e) => {
    dispatch(updateRockets((true, e)));
  };

  const handleCancelation = (e) => {
    dispatch(updateRockets((false, e)));
  };

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <div>
      <div>
        {rockets.map((rockets) => (
          <div key={rockets.id} id={rockets.id}>
            <img src={rockets.image} alt="rocket" />
            <ul>
              <li>{rockets.name}</li>
              <li>
                {rockets.reserved ? (<span>Reserved</span>) : (<span className="none">display-none</span>)}
                {rockets.description}
              </li>
              <li>{rockets.description}</li>
              <li>{rockets.name}</li>
            </ul>
            <div>
              {rockets.reserved
                ? (<button type="button" onClick={() => handleCancelation(rockets.id)}>CANCEL RESERVATION</button>)
                : (<button type="button" onClick={() => handleReservation(rockets.id)}>RESERVE ROCKET</button>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
