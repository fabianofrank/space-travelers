import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, updateRockets } from '../redux/rockets/rockets';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container">
      {rockets.map((rockets) => (
        <div className="" key={rockets.id} id={rockets.id}>
          <div className="d-flex border">
            <div className="my-4 mx-4">
              <img className="card" with="120" height="220" src={rockets.image} alt="rocket" />
            </div>
            <div className="w-50 text">
              <ul className="rocket-list">
                <li className="">
                  {rockets.reserved ? (<span>Reserved</span>) : (<span className="d-print-none" />)}
                </li>
                <li className="card-title capitalized">{rockets.name}</li>
                <li className="card-text">{rockets.description}</li>
              </ul>
              <div>
                {rockets.reserved
                  ? (<button type="button" className="btn btn-primary" onClick={() => handleCancelation(rockets.id)}>CANCEL RESERVATION</button>)
                  : (<button type="button" className="btn btn-primary" onClick={() => handleReservation(rockets.id)}>RESERVE ROCKET</button>)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
