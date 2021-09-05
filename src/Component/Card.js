import React from "react";
import uuid from "react-uuid";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ weatherData, setWeatherData }) => {
  const remove = (id) => {
    setWeatherData(weatherData.filter((data) => data.id !== id));
  };

  const Card_item = ({ city }) => {
    return (
      <div className="city_card">
        <FaTimes
          style={{ color: "red", cursor: "pointer", float: "right" }}
          onClick={() => remove(city.id)}
        />
        <Link to={`/${city.id}`}>
          <h3>
            {`${city.name} 
        ${city.sys.country}`}
          </h3>
        </Link>

        <p>{city.weather[0].main}</p>
        <div className="info">
          <h5>{city.weather[0].description}</h5>
          <img
            className="city-icon"
            src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            alt={city.weather[0].description}
          />

          <span></span>

          <p>
            {`Min Temp : ${Math.round(city.main.temp_min)}`}
            <sup>&deg;C</sup>
          </p>
          <p>
            {` Max Temp : ${city.main.temp_max}`}
            <sup>&deg;C</sup>
          </p>
          <p>{`Location : ${city.coord.lat} , ${city.coord.lon}`}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {weatherData.map((city) => (
        <Card_item key={uuid()} city={city} remove={remove} />
      ))}
    </>
  );
};

export default Card;
