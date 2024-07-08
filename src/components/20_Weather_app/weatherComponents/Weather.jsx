/**
  ->Sending search and set search and hanlde search button as props to weather search component 
 */

import { useEffect, useState } from "react";
import Search from "./WeatherSearch";
import { WiEarthquake } from "react-icons/wi";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [fetching, setFetching] = useState(false);
  const [weatherData, setweatherData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const API_KEY = "0ce42cb8cd2e08940db0b75a2d3935d6";

  async function fetchWeatherData(param) {
    setFetching(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );

      console.log(response);
      if (response.ok == false) {
        setErrorMsg(response);
      } else {
        setErrorMsg(null);
      }

      const data = await response.json();
      if (data) {
        setSearch("");
        setweatherData(data);
        setFetching(false);
      }
    } catch (error) {
      setFetching(false);
      console.log("hi");
      console.log(error.message);
    }
  }

  const imageData = [
    {
      label: "Rain",
      src: "https://i.ibb.co/W6tzwDL/rainy.jpg",
    },
    {
      label: "Snow",
      src: "https://i.ibb.co/TY6Y9PR/snow.jpg",
    },
    {
      label: "Cloud",
      src: "https://i.ibb.co/5n4bzLn/cloudy.jpg",
    },
    // <a href="https://ibb.co/JytDbHy">
    //   <img src="https://i.ibb.co/5n4bzLn/cloudy.jpg" alt="cloudy" border="0" />
    // </a>,
  ];

  async function handleSearch(e) {
    console.log(e);
    // in state search we have city name
    // we need to fethc

    fetchWeatherData(search);
  }

  // just for start
  useEffect(() => {
    fetchWeatherData("andhra pradesh");
  }, []);

  const currentDate = new Date();
  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <div className="weather-main">
        <h1>Weather app </h1>;
        <div className="weather-content">
          <Search
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          ></Search>
          {fetching ? (
            <div className="fetching-msg">Data is Fetching</div>
          ) : null}

          {errorMsg != null && (
            <div className="weather-errormsg">
              {" "}
              Error : {errorMsg.statusText} , Please Retry{" "}
            </div>
          )}
          {!fetching &&
          errorMsg == null &&
          weatherData &&
          weatherData.length != 0 ? (
            <div className="weather-report-div">
              <h2>
                {weatherData?.name}, {weatherData?.sys?.country}{" "}
              </h2>
              <div className="weather-date">{getCurrentDate()}</div>

              <h3 className="weather-temp">{weatherData?.main?.temp}</h3>

              {weatherData.weather && weatherData.weather[0] ? (
                <div className="weather-description">
                  {" "}
                  {weatherData.weather[0].description}
                </div>
              ) : (
                ""
              )}
              {weatherData.wind ? (
                <div className="weather-info">
                  <div className="weather-speed">
                    <div>{weatherData.wind["speed"]}</div>
                    <p>Wind Speed</p>
                  </div>
                  <div className="weather-degree">
                    <div>{weatherData.wind["deg"]}</div>
                    <p>Wind Degree</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Weather;
