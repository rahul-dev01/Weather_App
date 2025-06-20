import React from "react";
import { convertToFarhenheit, getWeatherTypeFromCode } from "../utils/WeatherUtlis";

const dateFormatter = new Intl.DateTimeFormat("en-In" ,{
    month :"short",
    day : "numeric",
    year: "2-digit"
})

const FormatDate = (date) => dateFormatter.format(date);

const WeatherRow = ({weather: {date ,maxTemperature , minTemperature ,weatherCode},isCelsius}) => {
    return(
        <tr>
            <td> {FormatDate(date)} </td>
            <td>L : {isCelsius ? `${minTemperature } ℃` : `${convertToFarhenheit(minTemperature)} ℉`} 
                {"  "}- H : {isCelsius ? `${maxTemperature} ℃` : `${convertToFarhenheit(maxTemperature)} ℉`}
            </td>
            <td>{getWeatherTypeFromCode(weatherCode)}</td>
        </tr>
    )
}

export default WeatherRow;

