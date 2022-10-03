import axios from "axios";

const api_prod = process.env.REACT_APP_API_ID;
const api = process.env.REACT_APP_API_ID;

const instance = axios.create({
  baseURL: "https://openweathermap.org/data/2.5/",
  timeout: 20000,
});

export const getCity = async (city) => {
  const res = await instance.get("find", {
    params: {
      q: city,
      appid: api_prod,
      units: "metric",
    },
  });
  return res;
};
export const getLatlong = async (lat, lon) => {
  const res = await instance.get("onecall", {
    params: {
      lat,
      lon,
      appid: api,
      units: "metric",
    },
  });
  return res;
};
