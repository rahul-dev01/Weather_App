import React from "react";
import { convertToFarhenheit,getWeatherTypeFromCode} from "../utils/WeatherUtlis";

const WeatherSummary = (
  { currentWeather: { temperature, weatherCode } , isCelsius },
  
) => {
  return (
    <h1>
      {isCelsius
        ? `${temperature} ℃`
        : `${convertToFarhenheit(temperature)} ℉`}{"  "}
      | {getWeatherTypeFromCode(weatherCode)}{"  "}
    </h1>
  );
};

export default WeatherSummary;
