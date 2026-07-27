import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, TextInput } from "@carbon/react";

function HomePage() {
  const [zip, setZip] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (zip.trim().length === 5) {
      navigate(`/weather/${zip}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f4f4f4",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0,0,0,.08)",
        }}
      >
        <h1>Forecast4U</h1>

        <p style={{ marginBottom: "2rem" }}>
          Accurate weather forecasts powered by the National Weather Service.
        </p>

        <TextInput
          id="zip"
          labelText="ZIP Code"
          placeholder="Enter ZIP Code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />

        <div style={{ marginTop: "1.5rem" }}>
          <Button onClick={handleSubmit}>Get Forecast</Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;