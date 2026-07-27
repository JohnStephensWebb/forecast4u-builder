import { useParams, Link } from "react-router-dom";
import {
  Sun,
  Wind,
  Droplets,
  Thermometer,
  Eye,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";

function WeatherPage() {
  const { zip } = useParams();

  const forecast = [
    { day: "Mon", icon: "☀️", high: "82°", low: "61°" },
    { day: "Tue", icon: "🌤️", high: "79°", low: "59°" },
    { day: "Wed", icon: "🌧️", high: "68°", low: "55°" },
    { day: "Thu", icon: "☀️", high: "85°", low: "63°" },
    { day: "Fri", icon: "🌤️", high: "77°", low: "60°" },
  ];

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
        <h2>Forecast4U</h2>

        <p className="location">
          Forecast for ZIP {zip}
        </p>

        <div className="current-weather">
          <Sun size={72} />

          <div>
            <h1>72°</h1>
            <p>Mostly Sunny</p>
          </div>
        </div>

        <div className="stats">

          <div>
            <Thermometer />
            <span>Feels Like</span>
            <strong>72°</strong>
          </div>

          <div>
            <Wind />
            <span>Wind</span>
            <strong>8 mph NW</strong>
          </div>

          <div>
            <Droplets />
            <span>Humidity</span>
            <strong>41%</strong>
          </div>

          <div>
            <Eye />
            <span>Visibility</span>
            <strong>10 mi</strong>
          </div>

        </div>

      </motion.div>


      <h2 className="forecast-title">
        5 Day Forecast
      </h2>


      <div className="forecast-strip">

        {forecast.map((day) => (
          <div className="forecast-card" key={day.day}>
            <h3>{day.day}</h3>

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