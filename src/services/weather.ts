const GEOCODING_URL =
  "https://geocoding-api.open-meteo.com/v1/search";

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast";


export async function getWeatherByZip(zip: string) {

  // ZIP -> location
  const geoResponse = await fetch(
    `${GEOCODING_URL}?name=${zip}&count=1&language=en&format=json`
  );

  const geoData = await geoResponse.json();

  if (!geoData.results?.length) {
    throw new Error("Location not found");
  }

  const location = geoData.results[0];


  // Location -> weather
  const weatherResponse = await fetch(
    `${WEATHER_URL}?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto`
  );


  const weather = await weatherResponse.json();


  return {
    location: {
      city: location.name,
      state: location.admin1,
    },

    current: {
      temperature:
        weather.current.temperature_2m,

      humidity:
        weather.current.relative_humidity_2m,

      wind:
        weather.current.wind_speed_10m,

      code:
        weather.current.weather_code,
    },

    forecast:
      weather.daily,
  };
}