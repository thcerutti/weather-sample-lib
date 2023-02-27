const { getWeather } = require("./src/api-call");
const { version } = require("./package.json");

console.info(`running lib version ${version}`);

module.exports = {
  getWeather,
};
