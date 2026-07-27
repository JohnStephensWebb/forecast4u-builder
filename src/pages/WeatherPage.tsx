import { useParams } from "react-router-dom";

import {
  Tile,
  Grid,
  Column,
  Button,
} from "@carbon/react";

function WeatherPage() {
  const { zip } = useParams();

  return (
    <div style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <h1>Forecast4U</h1>

      <p style={{ marginBottom: "2rem" }}>
        Forecast for ZIP Code <strong>{zip}</strong>
      </p>

      <Grid condensed>
        <Column sm={4} md={4} lg={4}>
          <Tile>
            <h3>Current Conditions</h3>

            <h1>72°F</h1>

            <p>Mostly Sunny</p>
          </Tile>
        </Column>

        <Column sm={4} md={4} lg={4}>
          <Tile>
            <h3>Wind</h3>

            <h2>8 mph</h2>

            <p>NW</p>
          </Tile>
        </Column>

        <Column sm={4} md={4} lg={4}>
          <Tile>
            <h3>Humidity</h3>

            <h2>41%</h2>
          </Tile>
        </Column>
      </Grid>

      <div style={{ marginTop: "2rem" }}>
        <Button kind="secondary" href="/">
          Search Another ZIP
        </Button>
      </div>
    </div>
  );
}

export default WeatherPage;