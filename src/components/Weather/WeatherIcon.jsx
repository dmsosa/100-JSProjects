import { useEffect, useState } from "react";
import { FaCloud, FaCloudRain, FaCloudShowersHeavy, FaBolt, FaRegSnowflake, FaSmog } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

function WeatherIcon({description}) {
    let weatherIcon = null;

    if ( description === 'Thunderstorm') {
      weatherIcon =  <FaBolt/>;
    } else if ( description === 'Drizzle') {
      weatherIcon =  <FaCloudRain/> ;
    } else if ( description === 'Rain') {
      weatherIcon =  <FaCloudShowersHeavy/> ;
    } else if ( description === 'Snow') {
      weatherIcon =  <FaRegSnowflake/> ;
    } else if ( description === 'Clear') {
      weatherIcon =  <IoSunny/> ;
    } else if ( description === 'Clouds') {
      weatherIcon =  <FaCloud/> ;
    } else {
      weatherIcon =  <FaSmog/> ;
    }

    return (
        <div className="icon">{weatherIcon}</div>
    )
}

export default WeatherIcon;
