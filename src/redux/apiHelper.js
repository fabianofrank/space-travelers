const rocketsURL = 'https://api.spacexdata.com/v3/rockets';
const missionsURL = 'https://api.spacexdata.com/v3/missions';

// GET
export const fetchRocketsAPI = async () => {
  const response = await fetch(rocketsURL);
  return response.json();
};

export const fetchMissionsAPI = async () => {
  const response = await fetch(missionsURL);
  return response.json();
};

export default { fetchRocketsAPI, fetchMissionsAPI };
