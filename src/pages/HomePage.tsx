import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

function HomePage() {
  const [zip, setZip] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (zip.length === 5) {
      navigate(`/weather/${zip}`);
    }
  };

  return (
    <div className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>
          Weather intelligence
          <br />
          made simple.
        </h1>

        <p>
          Get accurate forecasts, real-time conditions, and insights that help
          you plan your day with confidence.
        </p>

        <div className="search-container">
          <input
            type="text"
            placeholder="Enter ZIP code"
            value={zip}
            maxLength={5}
            onChange={(e) => setZip(e.target.value)}
          />

          <button onClick={handleSearch}>
            <Search size={20} />
            Check Weather
          </button>
        </div>

        <span className="example">
          Try a ZIP code like 80202
        </span>
      </motion.div>
    </div>
  );
}

export default HomePage;