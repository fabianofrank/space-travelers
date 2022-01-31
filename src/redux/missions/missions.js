//Add API helper 

const FETCH_MISSIONS = '.space-travelers/missions/FETCH_MISSIONS';
const JOIN_MISSION = 'space-travelers/missions/JOIN_MISSION';

/const initialState = [];

export const fetchMissions = () => async (dispatch) => {
  const missions = await fetchMissionsAPI();

  const missionsForDispatch = missions.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));

  dispatch({
    type: FETCH_MISSIONS,
    payload: missionsForDispatch,
  });
};

// ADD REDUCER
