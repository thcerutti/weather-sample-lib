const { getWeather } = require("../index");

describe("given the `getWheather` function", () => {
  it("should return json result", async () => {
    const lat = -27.6;
    const long = -48.55;
    const result = await getWeather(lat, long);
    console.log(result);
    expect(result?.current_weather?.temperature).not.toBeNull()
  });
});
