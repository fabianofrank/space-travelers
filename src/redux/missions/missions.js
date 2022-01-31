import { fetchMissionsAPI } from '../apiHelper';

const FETCH_MISSIONS = '.space-travelers/missions/FETCH_MISSIONS';
// const JOIN_MISSION = 'space-travelers/missions/JOIN_MISSION';

// const initialState = [];

export const fetchMissions = () => async (dispatch) => {
  const missions = await fetchMissionsAPI();
  console.log(missions);
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

console.log(fetchMissions());

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
