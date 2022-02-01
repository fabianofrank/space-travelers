import { fetchMissionsAPI } from '../apiHelper';

const FETCH_MISSIONS = '.space-travelers/missions/FETCH_MISSIONS';

// const initialState = [];

export const fetchMissions = () => async (dispatch) => {
  const missions = await fetchMissionsAPI();
  const missionsForDispatch = missions.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));

  dispatch({
    type: FETCH_MISSIONS,
    payload: missionsForDispatch,
  });
};

// ADD REDUCER
const missions = (state = [], action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default { missions };
