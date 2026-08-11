import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css';
import { useState } from 'react';

export default function Searchbox({ updateinfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "a80ea48b7449f5da4ab07221f9d75ebb";

  const getWeatherInfo = async (searchCity) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${searchCity}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        // City not found
        return null;
      }

      // Clear previous errors
      setError("");

      return {
        city: searchCity,
        temp: data.main.temp,
        tempmax: data.main.temp_max,
        tempmin: data.main.temp_min,
        humidity: data.main.humidity,
        feelslike: data.main.feels_like,
        weather: data.weather[0].description,
      };
    } catch (err) {
      setError("Network error! Please try again.");
      return null;
    }
  };

  const handleChange = (evt) => setCity(evt.target.value);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const searchCity = city.trim();
    if (!searchCity) return;
    setCity("");

    const newInfo = await getWeatherInfo(searchCity);
    if (newInfo) {
      // Valid city → update Infobox
      updateinfo(newInfo);
    } else {
      // Invalid city → show error on card
      setError("City not found!");
      updateinfo({
        city: "City not found",
        temp: "-",
        tempmax: "-",
        tempmin: "-",
        humidity: "-",
        feelslike: "-",
        weather: "-",
      });
    }
  };

  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
}
