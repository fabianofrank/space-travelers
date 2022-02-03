import { fetchRocketsAPI } from '../apiHelper';

const FETCH_ROCKETS = '.space-travelers/rockets/FETCH_ROCKETS';
const UPDATE_ROCKETS = '.space-travelers/rockets/UPDATE_ROCKETS';

export const fetchRockets = () => async (dispatch) => {
  const rockets = await fetchRocketsAPI();
  const rocketsForDispatch = rockets.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    image: rocket.flickr_images,
  }));
  dispatch({
    type: FETCH_ROCKETS,
    payload: rocketsForDispatch,
  });
};

const rockets = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case UPDATE_ROCKETS:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
    default:
      return state;
  }
};

export default rockets;
