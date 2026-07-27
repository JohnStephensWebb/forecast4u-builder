import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [zip, setZip] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (zip.trim().length === 5) {
      navigate(`/weather/${zip}`);
    } else {
      alert("Please enter a valid 5-digit ZIP code.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "80px auto",
        textAlign: "center",
      }}
    >
      <h1>Forecast4U</h1>

      <p>Enter your ZIP code to view the forecast.</p>

      <input
        type="text"
        placeholder="ZIP Code"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        maxLength={5}
        style={{
          padding: "12px",
          width: "100%",
          fontSize: "18px",
          marginBottom: "20px",
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Get Forecast
      </button>
    </div>
  );
}

export default HomePage;