import { motion } from "framer-motion";
import { CloudSun, MapPin, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function HomePage() {
  const navigate = useNavigate();
  const [zip, setZip] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (zip.length === 5) {
      navigate(`/weather/${zip}`);
    }
  }

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-icon">
          <CloudSun size={72} />
        </div>

        <h1>Forecast4U</h1>

        <p>
          Personalized weather intelligence,
          <br />
          built for your day.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="search-container">
            <MapPin size={20} />

            <input
              placeholder="Enter ZIP code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              maxLength={5}
            />

            <button type="submit">
              Get Forecast
            </button>
          </div>
        </form>

        <div className="features">
          <div className="feature">
            <Zap size={18} />
            Fast forecasts
          </div>

          <div className="feature">
            <ShieldCheck size={18} />
            Reliable data
          </div>

          <div className="feature">
            <Sparkles size={18} />
            Smart insights
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HomePage;