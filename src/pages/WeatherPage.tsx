import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getWeatherByZip } from "../services/weather";
import {
  Wind,
  Droplets,
  Thermometer,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";

function getWeatherCondition(code: number) {
  if (code === 0) return { icon: "☀️", label: "Clear" };
  if ([1, 2, 3].includes(code)) return { icon: "🌤️", label: "Partly Cloudy" };
  if ([45, 48].includes(code)) return { icon: "🌫️", label: "Fog" };
  if ([51, 53, 55, 56, 57].includes(code)) return { icon: "🌦️", label: "Drizzle" };
  if ([61, 63, 65, 80, 81, 82].includes(code)) return { icon: "🌧️", label: "Rain" };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { icon: "❄️", label: "Snow" };
  if ([95, 96, 99].includes(code)) return { icon: "⛈️", label: "Storm" };

  return { icon: "🌤️", label: "Unknown" };
}

function formatDay(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
  });
}

function formatTime(date: string) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
  });
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
      } catch {
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

  const current = getWeatherCondition(weather.current.code);

  const grouped = weather.hourly.reduce(
    (acc: Record<string, any[]>, item: any) => {
      const day = formatDay(item.time);

      if (!acc[day]) {
        acc[day] = [];
      }

      acc[day].push(item);

      return acc;
    },
    {}
  );

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
          {weather.location.city}, {weather.location.state}
        </p>

        <div className="current-weather">

          <div className="weather-icon-large">
            {current.icon}
          </div>

          <div>
            <h1>
              {Math.round(weather.current.temperature)}°
            </h1>

            <p>{current.label}</p>
          </div>

        </div>

        <div className="stats">

          <div>
            <Thermometer />
            <span>Temperature</span>
            <strong>{Math.round(weather.current.temperature)}°</strong>
          </div>

          <div>
            <Wind />
            <span>Wind</span>
            <strong>{Math.round(weather.current.wind)} mph</strong>
          </div>

          <div>
            <Droplets />
            <span>Humidity</span>
            <strong>{weather.current.humidity}%</strong>
          </div>

        </div>

      </motion.div>

      <h2 className="forecast-title">
        5-Day Forecast (Every 3 Hours)
      </h2>

      {Object.entries(grouped).map(([day, entries]) => (

        <div key={day} className="forecast-day">

          <h3>{day}</h3>

          <div className="forecast-strip">

            {(entries as any[]).map((hour) => {

              const condition = getWeatherCondition(hour.weatherCode);

              return (

                <div
                  className="forecast-card"
                  key={hour.time}
                >

                  <div className="forecast-time">
                    {formatTime(hour.time)}
                  </div>

                  <div className="forecast-icon">
                    {condition.icon}
                  </div>

                  <strong>
                    {Math.round(hour.temperature)}°
                  </strong>

                  <small>
                    {condition.label}
                  </small>

                  <small>
                    💨 {Math.round(hour.wind)} mph
                  </small>

                  <small>
                    🌧 {hour.precipitation}%
                  </small>

                </div>

              );

            })}

          </div>

        </div>

      ))}

    </div>
  );
}

export default WeatherPage;