import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
