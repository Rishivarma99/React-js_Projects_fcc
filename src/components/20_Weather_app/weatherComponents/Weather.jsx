/**
  ->Sending search and set search and hanlde search button as props to weather search component 
 */

import { useEffect, useState } from "react";
import Search from "./WeatherSearch";

const Weather = () => {
  const [search, setSearch] = useState("mumbai");
  const [fetching, setFetching] = useState(false);
  const [weatherData, setweatherData] = useState(null);

  const API_KEY = "0ce42cb8cd2e08940db0b75a2d3935d6";

  async function fetchWeatherData(param) {
    setFetching(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );
      const data = await response.json();
      if (data) {
        setweatherData(data);
        setFetching(false);
      }
    } catch (error) {
      setFetching(false);
      console.log(error);
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
    fetchWeatherData(search);
  }, [search]);

  console.log(weatherData);

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

          {!fetching && weatherData && weatherData.length != 0 ? (
            <div className="weather-report-div">
              {/* <h2>{{weatherData.name}} </h2> */}

              <div className="weather-lon-lat">
                <p className="weather-lat">
                  {" "}
                  <span className="weather-span">Lon :</span>
                  {weatherData.coord["lat"]}
                </p>
                <p className="weather-lat">
                  {" "}
                  <span className="weather-span">Lat :</span>
                  {weatherData.coord["lon"]}
                </p>
              </div>
              {weatherData.weather.map((item) => {
                return (
                  <div className="weather-description">
                    <p>
                      {" "}
                      <span className="weather-span">main :</span> {item.main}
                    </p>
                    <p>
                      {" "}
                      <span className="weather-span">description:</span>{" "}
                      {item.description}
                    </p>
                  </div>
                );
              })}
              <div className="weather-windspeed">
                <p>
                  {" "}
                  <span className="weather-span">degree : </span>{" "}
                  {weatherData.wind["deg"]}
                </p>
                <p>
                  {" "}
                  <span className="weather-span">Speed : </span>{" "}
                  {weatherData.wind["speed"]}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Weather;
