import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Kyiv",
    description: "Broken clouds",
    imgUrl:
      "https://raw.githubusercontent.com/KseniiaVyshniakova/weather-app/0e3961d0c5ba3780c451e0105571b000de029808/src/img/04d.svg",
    temp: 27,
    date: "20 July",
    time: "13:40",
    humidity: 48,
    wind: 6,
  };
  return (
    <div className="Weather-wrapper">
      <div className="Weather">
        <form className="mb-4">
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-secondary pe-md-4 ps-md-4 ms-md-2"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <div className="row">
            <div className="col-sm-7">
              <h1>{weatherData.city}</h1>
            </div>
            <div className="col-sm-5">
              <span>
                {weatherData.date} | {weatherData.time}
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temp}</strong>
                <span className="units">
                  <a href="/" className="active">
                    °C
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-5">
            <ul>
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </div>
      <small className="code-link">
        <a
          href="https://github.com/KseniiaVyshniakova/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Kseniia Vyshniakova
      </small>
    </div>
  );
}
