import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateRockets } from '../redux/rockets/rockets';
import 'bootstrap/dist/css/bootstrap.min.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const handleReservation = (id) => {
    dispatch(updateRockets((id)));
  };

  const handleCancelation = (id) => {
    dispatch(updateRockets((id)));
  };

  return (
    <div className="container">
      {rockets.map((rockets) => (
        <div className="" key={rockets.id} id={rockets.id}>
          <div className="d-flex border">
            <div className="my-4 mx-4 imgbox">
              <img src={rockets.image} alt="rocket" with="70" height="120" />
            </div>
            <div className="w-50 text d-flex align-content left">
              <ul className="rocket-list">
                <li className="card-title capitalized fw-bold">{rockets.name}</li>
                <li className="reserved">
                  {rockets.reserved ? (<button type="button" className="btn btn-warning">Reserved</button>) : (<span className="d-print-none" />)}
                </li>
                <li className="card-text">{rockets.description}</li>
                <li>
                  {rockets.reserved
                    ? (<button type="button" className="btn btn-primary" onClick={() => handleCancelation(rockets.id)}>CANCEL RESERVATION</button>)
                    : (<button type="button" className="btn btn-primary" onClick={() => handleReservation(rockets.id)}>RESERVE ROCKET</button>)}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
