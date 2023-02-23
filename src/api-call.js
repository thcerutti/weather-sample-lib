const axios = require("axios");

const getWeather = async (lat, long) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`;
  const weather = await axios.get(url);
  return weather.data;
};

module.exports = { getWeather };
