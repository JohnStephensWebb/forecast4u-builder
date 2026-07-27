import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getWeatherByZip } from "../services/weather";

import {
  Sun,
  Wind,
  Droplets,
  Thermometer,
  Eye,
  ArrowLeft,
} from "lucide-react";

import { motion } from "framer-motion";


function getWeatherIcon(code: number) {

  if (code === 0) return "☀️";

  if ([1, 2, 3].includes(code)) return "🌤️";

  if ([45, 48].includes(code)) return "🌫️";

  if ([51, 53, 55, 56, 57].includes(code)) return "🌦️";

  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    return "🌧️";
  }

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return "❄️";
  }

  if ([95, 96, 99].includes(code)) {
    return "⛈️";
  }

  return "🌤️";
}


function formatDay(date: string) {

  return new Date(date).toLocaleDateString(
    "en-US",
    {
      weekday: "short",
    }
  );

}


function WeatherPage() {

  const { zip } = useParams();

  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {

    async function loadWeather() {

      try {

        const data = await getWeatherByZip(zip || "");

        setWeather(data);

      } catch (err) {

        setError("Unable to load weather data");

      } finally {

        setLoading(false);

      }

    }


    loadWeather();

  }, [zip]);



  if (loading) {

    return (
      <div className="weather-page">
        <h2>Loading forecast...</h2>
      </div>
    );

  }



  if (error) {

    return (
      <div className="weather-page">
        <h2>{error}</h2>
      </div>
    );

  }



  const forecast = weather.forecast.map((day: any) => ({
    day: formatDay(day.date),
    icon: getWeatherIcon(day.weatherCode),
    high: `${Math.round(day.high)}°`,
    low: `${Math.round(day.low)}°`,
  }));



  return (

    <div className="weather-page">


      <Link to="/" className="back-link">

        <ArrowLeft size={18} />

        Search another ZIP

      </Link>



      <motion.div

        className="weather-card"

        initial={{ opacity: 0, y: 20 }}

        animate={{ opacity: 1, y: 0 }}

      >


        <h2>
          Forecast4U
        </h2>



        <p className="location">

          Forecast for {weather.location.city}, {weather.location.state}

        </p>




        <div className="current-weather">


          <Sun size={72} />


          <div>


            <h1>

              {Math.round(weather.current.temperature)}°

            </h1>


            <p>

              Current Conditions

            </p>


          </div>


        </div>




        <div className="stats">


          <div>

            <Thermometer />

            <span>
              Feels Like
            </span>


            <strong>

              {Math.round(weather.current.temperature)}°

            </strong>

          </div>




          <div>

            <Wind />

            <span>
              Wind
            </span>


            <strong>

              {weather.current.wind} mph

            </strong>

          </div>




          <div>

            <Droplets />

            <span>
              Humidity
            </span>


            <strong>

              {weather.current.humidity}%

            </strong>

          </div>




          <div>

            <Eye />

            <span>
              Visibility
            </span>


            <strong>
              10 mi
            </strong>

          </div>



        </div>



      </motion.div>





      <h2 className="forecast-title">

        5 Day Forecast

      </h2>





      <div className="forecast-strip">


        {forecast.map((day: any) => (


          <div

            className="forecast-card"

            key={day.day}

          >


            <h3>

              {day.day}

            </h3>



            <div className="forecast-icon">

              {day.icon}

            </div>



            <strong>

              {day.high}

            </strong>



            <span>

              {day.low}

            </span>



          </div>


        ))}



      </div>



    </div>

  );

}


export default WeatherPage;