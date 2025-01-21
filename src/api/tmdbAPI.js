import axios from "axios";

const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

export const fetchTMDBdata = async (endpoint) => {
  try {
    const response = await tmdbApi.get(`/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("호출 실패실패!!!", error);
  }
};
