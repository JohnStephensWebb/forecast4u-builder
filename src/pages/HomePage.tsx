import { TextInput, Button } from "@carbon/react";
import { motion } from "framer-motion";
import { CloudSun, ShieldCheck, Zap, Sparkles } from "lucide-react";
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

        <form onSubmit={handleSubmit} className="search-container">

 <div className="zip-input-wrapper">
  <TextInput
    id="zip"
    labelText=" "
    hideLabel
    placeholder="Enter ZIP Code"
    value={zip}
    maxLength={5}
    onChange={(e) => setZip(e.target.value)}
  />
</div>

  <Button type="submit">
    Get Forecast
  </Button>

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