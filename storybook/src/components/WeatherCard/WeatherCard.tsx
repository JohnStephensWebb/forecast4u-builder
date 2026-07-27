import {
  Tile,
  Tag,
} from "@carbon/react";

import "./WeatherCard.scss";

type WeatherCardProps = {
  city: string;
  temperature: number;
  condition: string;
  wind: number;
  humidity: number;
};

function WeatherCard({
  city,
  temperature,
  condition,
  wind,
  humidity,
}: WeatherCardProps) {
  return (
    <Tile className="weather-card">

      <div className="weather-card__header">
        <h3>{city}</h3>

        <Tag type="blue">
          Current
        </Tag>
      </div>

      <div className="weather-card__temperature">
        {temperature}°
      </div>

      <p className="weather-card__condition">
        {condition}
      </p>

      <div className="weather-card__stats">

        <div>
          <span>Wind</span>
          <strong>{wind} mph</strong>
        </div>

        <div>
          <span>Humidity</span>
          <strong>{humidity}%</strong>
        </div>

      </div>

    </Tile>
  );
}

export default WeatherCard;


