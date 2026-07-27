import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  TextInput,
  Tile,
} from "@carbon/react";

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
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f62fe 0%, #001141 100%)",
        padding: "4rem 2rem",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "1rem",
            fontWeight: 700,
          }}
        >
          Forecast4U
        </h1>

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 400,
            marginBottom: "1rem",
          }}
        >
          Weather intelligence for wherever life takes you.
        </h2>

        <p
          style={{
            fontSize: "1.2rem",
            opacity: 0.9,
            marginBottom: "3rem",
          }}
        >
          Get accurate forecasts, outdoor recommendations,
          and AI-powered insights tailored to your day.
        </p>


        <div
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "16px",
            maxWidth: "500px",
            margin: "0 auto",
            color: "#161616",
          }}
        >
          <TextInput
            id="zip"
            labelText="Enter ZIP Code"
            placeholder="Example: 80302"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />

          <div style={{ marginTop: "1.5rem" }}>
            <Button
              onClick={handleSubmit}
              style={{
                width: "100%",
              }}
            >
              Get Forecast →
            </Button>
          </div>
        </div>


        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            marginTop: "4rem",
          }}
        >

          <Tile>
            <h3>🤖 AI Weather Assistant</h3>
            <p>
              Personalized recommendations based on
              your plans and conditions.
            </p>
          </Tile>


          <Tile>
            <h3>🥾 Outdoor Intelligence</h3>
            <p>
              Discover the best times for hiking,
              biking, and adventures.
            </p>
          </Tile>


          <Tile>
            <h3>🌎 Location Insights</h3>
            <p>
              Understand your environment beyond
              just temperature.
            </p>
          </Tile>

        </div>

      </div>
    </div>
  );
}

export default HomePage;