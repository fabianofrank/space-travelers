import { fetchRocketsAPI } from '../apiHelper';

// ACTION TYPES
const FETCH_ROCKETS = '.space-travelers/rockets/FETCH_ROCKETS';

// ACTIONS
export const fetchRockets = () => async (dispatch) => {
  const rockets = await fetchRocketsAPI();
  console.log(rockets);
  const rocketsForDispatch = rockets.map((rocket) => ({
    rocket_id: rocket.id,
    rocket_name: rocket.name,
    rocket_image: rocket.flickr_images,
  }));

  dispatch({
    type: FETCH_ROCKETS,
    payload: rocketsForDispatch,
  });
};

fetchRockets();

// RUDECER
const rockets = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default { rockets };
