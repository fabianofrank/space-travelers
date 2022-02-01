import { fetchRocketsAPI } from '../apiHelper';

const FETCH_ROCKETS = '.space-travelers/rockets/FETCH_ROCKETS';

export const fetchRockets = () => async (dispatch) => {
  const rockets = await fetchRocketsAPI();
  const rocketsForDispatch = rockets.map((rocket) => ({
    id: rocket.id,
    name: rocket.name,
    image: rocket.flickr_images,
  }));

  dispatch({
    type: FETCH_ROCKETS,
    payload: rocketsForDispatch,
  });
};

fetchRockets();

const rockets = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default { rockets };
