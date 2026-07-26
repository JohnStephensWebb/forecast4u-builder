import { useParams } from "react-router-dom";

function WeatherPage() {
  const { zip } = useParams();

  return (
    <div>
      <h1>Weather Forecast</h1>

      <p>Showing forecast for ZIP:</p>

      <h2>{zip}</h2>
    </div>
  );
}

export default WeatherPage;