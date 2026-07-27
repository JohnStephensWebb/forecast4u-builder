const GEOCODING_URL =
  "https://geocoding-api.open-meteo.com/v1/search";

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast";


export interface Location {
  city: string;
  state: string;
}


export interface CurrentWeather {
  temperature: number;
  humidity: number;
  wind: number;
  code: number;
}


export interface HourlyForecast {
  time: string;
  temperature: number;
  weatherCode: number;
  wind: number;
  precipitation: number;
}


export interface WeatherData {
  location: Location;
  current: CurrentWeather;
  hourly: HourlyForecast[];
}


export async function getWeatherByZip(
  zip: string
): Promise<WeatherData> {

  const geoResponse = await fetch(
    `${GEOCODING_URL}?name=${zip}&count=1&language=en&format=json`
  );

  const geoData = await geoResponse.json();


  if (!geoData.results?.length) {
    throw new Error("Location not found");
  }


  const location = geoData.results[0];


  const weatherResponse = await fetch(
    `${WEATHER_URL}?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&hourly=temperature_2m,weather_code,wind_speed_10m,precipitation_probability&temperature_unit=fahrenheit&wind_speed_unit=mph&forecast_days=5&timezone=auto`
  );


  const weather = await weatherResponse.json();


  const hourly: HourlyForecast[] = [];


  for (let i = 0; i < weather.hourly.time.length; i += 3) {

    hourly.push({

      time: weather.hourly.time[i],

      temperature:
        weather.hourly.temperature_2m[i],

      weatherCode:
        weather.hourly.weather_code[i],

      wind:
        weather.hourly.wind_speed_10m[i],

      precipitation:
        weather.hourly.precipitation_probability[i],

    });

  }


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


    hourly,

  };

}