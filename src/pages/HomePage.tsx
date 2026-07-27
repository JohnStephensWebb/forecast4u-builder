import { motion } from "framer-motion";
import { Search, MapPin, CloudSun, Zap, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [zip, setZip] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (zip.length === 5) {
      navigate(`/weather/${zip}`);
    }
  }

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-icon">
          <CloudSun size={48} />
        </div>

        <h1>
          Weather intelligence
          <br />
          built for your day.
        </h1>

        <p>
          Get accurate forecasts, personalized insights,
          and weather information wherever you go.
        </p>

        <div className="search-container">
          <MapPin size={20} />

          <input
            placeholder="Enter ZIP code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />

          <button onClick={handleSearch}>
            <Search size={20} />
            Forecast
          </button>
        </div>

        <div className="features">

          <div className="feature">
            <Zap />
            <span>
              Fast forecasts
            </span>
          </div>

          <div className="feature">
            <ShieldCheck />
            <span>
              Reliable data
            </span>
          </div>

          <div className="feature">
            <CloudSun />
            <span>
              Smart insights
            </span>
          </div>

        </div>

      </motion.div>
    </section>
  );
}

export default HomePage;