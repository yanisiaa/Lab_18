import React, { useEffect, useState } from "react";
import { getWeather } from "../api/weather";
import "./MyCity.css";
import kramatorskPhoto from "../assets/kramatorsk.jpg";
import { FaTree, FaCoffee, FaWater, FaLandmark } from "react-icons/fa";

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeather("Kramatorsk");
      if (data) {
        setWeather(data);
      } else {
        setError(true);
      }
      setLoading(false);
    };
    fetchWeather();
  }, []);

  return (
    <div className="mycity-page">
      <div className="mycity-container">
        <h1 className="mycity-title">Моє місто — Краматорськ</h1>

        <img src={kramatorskPhoto} alt="Краматорськ" className="mycity-photo" />

        <blockquote className="mycity-quote">
          «Немає місця кращого за дім, коли дім — це Краматорськ, сповнений тепла й спогадів.»
        </blockquote>

        <p className="mycity-text">
          Краматорськ — це сучасне місто на сході України, яке має велике значення
          як промисловий і культурний центр. Місто активно розвивається, має затишні
          парки, приємні вулички та дружню атмосферу. Тут народжується нове майбутнє Донеччини.
        </p>

        <h2 className="mycity-subtitle">Погода у Краматорську</h2>

        {loading && <p className="weather-loading">Завантаження погоди...</p>}
        {error && (
          <p className="weather-error">
            ⚠️ Не вдалося отримати дані про погоду. Перевірте API-ключ.
          </p>
        )}

        {!loading && weather && (
          <div className="weather-box">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Погода"
              className="weather-icon"
            />
            <div className="weather-info-group">
              <p className="weather-info"><strong>🌡 Температура:</strong> {weather.main.temp} °C</p>
              <p className="weather-info"><strong>☁️ Опис:</strong> {weather.weather[0].description}</p>
              <p className="weather-info"><strong>💨 Вітер:</strong> {weather.wind.speed} м/с</p>
              <p className="weather-info"><strong>📍 Місто:</strong> {weather.name}</p>
            </div>
          </div>
        )}

        <h2 className="mycity-subtitle">Улюблені місця</h2>
        <div className="places">
          <div className="place-card"><FaTree /><p>Парк «Ювілейний»</p></div>
          <div className="place-card"><FaLandmark /><p>Площа Миру</p></div>
          <div className="place-card"><FaWater /><p>Казенний Торець</p></div>
          <div className="place-card"><FaCoffee /><p>Місцеві кав'ярні</p></div>
        </div>
      </div>
    </div>
  );
};

export default MyCity;
