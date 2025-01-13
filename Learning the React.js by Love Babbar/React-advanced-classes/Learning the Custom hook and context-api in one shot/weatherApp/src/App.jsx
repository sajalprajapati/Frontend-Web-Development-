import React, { useState } from "react";
import ThemeContextProvider from "./context/ThemeContextProvider";
import useFetch from "./hook/useFetch";
import WeatherCard from "./components/WeatherCard";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");
  const { data: weather, loading, error } = useFetch(
    query ? `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=YOUR_API_KEY` : null
  );

  const handleSearch = () => {
    setQuery(city);
  };

  return (
    <ThemeContextProvider>
      <div className="p-6">
        <ThemeSwitcher />
        <div className="my-4">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 border rounded"
          />
          <button onClick={handleSearch} className="p-2 bg-green-500 text-white rounded ml-2">
            Search
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </ThemeContextProvider>
  );
};

export default App;
