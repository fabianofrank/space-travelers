const rocketsURL = 'https://api.spacexdata.com/v3/rockets';
const missionsURL = 'https://api.spacexdata.com/v3/missions';

// GET
export const fetchRocketsAPI = async () => {
  const response = await fetch(rocketsURL);
  const data = await response.json();
  return data;
};

export const fetchMissionsAPI = async () => {
  const response = await fetch(missionsURL);
  const data = await response.json();
  return data;
};

export default { fetchRocketsAPI, fetchMissionsAPI };
