const axios = require("axios");
const baseForecastUrl = 'https://api.open-meteo.com/v1/forecast'

const getWeather = async (lat, long) => {
  const url = `${baseForecastUrl}?latitude=${lat}&longitude=${long}&current_weather=true`;
  const weather = await axios.get(url);
  return weather.data;
};

module.exports = { getWeather };
