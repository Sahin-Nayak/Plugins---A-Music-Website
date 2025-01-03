import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSun, FaCloud, FaCloudRain, FaBolt, FaSnowflake, FaWind } from "react-icons/fa";

const API_KEY = "1920d6cb5e94458a9e3dd44022f6a583"; // Replace with your OpenWeatherMap API key

const WeatherApp = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });
  const [weather, setWeather] = useState(null); // Store weather data
  const [loading, setLoading] = useState(false); // For loading state

  // Function to fetch weather based on coordinates
  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data); // Save weather data
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
  };

  // Fetch location when the component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude, error: null });
          fetchWeather(latitude, longitude); // Fetch weather after getting location
        },
        (error) => {
          setLocation({ latitude: null, longitude: null, error: error.message });
          setLoading(false);
        }
      );
    } else {
      setLocation({
        latitude: null,
        longitude: null,
        error: "Geolocation is not supported by this browser.",
      });
    }
  }, []); // Empty dependency array means this runs once when the component mounts

  // Function to display weather icon based on the description
  const getWeatherIcon = (description) => {
    switch (description) {
      case "clear sky":
        return <FaSun />;
      case "few clouds":
      case "scattered clouds":
      case "broken clouds":
        return <FaCloud />;
      case "shower rain":
      case "rain":
        return <FaCloudRain />;
      case "thunderstorm":
        return <FaBolt />;
      case "snow":
        return <FaSnowflake />;
      case "mist":
      case "windy":
        return <FaWind />;
      default:
        return <FaCloud />; // Fallback to a cloud icon for any unhandled conditions
    }
  };

  return (
    <div>
      <h1><b>Today's Weather</b></h1>
      {loading && <p>Fetching location and weather...</p>}
      {location.error && <p>Error: {location.error}</p>}
      {weather && (
        <div>
          <br />
          {/* <p>Location: {weather.name}</p> */}
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
          {/* Display weather icon */}
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "2rem" }}>
            <div>{getWeatherIcon(weather.weather[0].description)}</div>
            <div>{getWeatherIcon(weather.weather[0].description)}</div>
            <div>{getWeatherIcon(weather.weather[0].description)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
