import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, updateRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const rocketReservation = (value = false, e) => {
    const returnReservedRocket = rockets.map((rocket) => {
      if (rocket.id !== e.target.parentElement.parentElement.id) {
        return rocket;
      }
      return { ...rocket, reserved: value };
    });
    return returnReservedRocket;
  };

  const handleReservation = (e) => {
    dispatch(updateRockets(rocketReservation(true, e)));
  };

  const handleCancelation = (e) => {
    dispatch(updateRockets(rocketReservation(false, e)));
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
                ? (<button type="button" onClick={handleCancelation}>CANCEL RESERVATION</button>)
                : (<button type="button" onClick={handleReservation}>RESERVE ROCKET</button>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
