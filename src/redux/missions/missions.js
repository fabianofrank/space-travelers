import { fetchMissionsAPI } from '../apiHelper';

// ACTIONS TYPE
const FETCH_MISSIONS = '.space-travelers/missions/FETCH_MISSIONS';
const UPDATE_MISSIONS = '.space-travelers/missions/UPDATE_MISSIONS';

// ACTION
export const fetchMissions = () => async (dispatch) => {
  const response = await fetchMissionsAPI();
  const missionsDispatched = response.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
  }));
  dispatch({
    type: FETCH_MISSIONS,
    payload: missionsDispatched,
  });
};

export const updateMissions = (payload) => ({
  type: UPDATE_MISSIONS,
  payload,
});

// REDUCER
const missions = (state = [], action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    case UPDATE_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missions;
