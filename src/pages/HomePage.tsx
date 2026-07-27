import { motion } from "framer-motion";
import { CloudSun, MapPin } from "lucide-react";
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
    <div className="home">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CloudSun size={72} />

        <h1>Forecast4U</h1>

        <p>
          Personalized weather intelligence,
          <br />
          built for your day.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="search-box">
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
      </motion.div>
    </div>
  );
}

export default HomePage;