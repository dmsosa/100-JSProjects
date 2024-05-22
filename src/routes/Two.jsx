import { useEffect, useState } from "react";
import { fetchWeather } from "../services/weather";
import WeatherComponent from "../components/Weather/WeatherComponent";

function Two() {
    const [ lat, setLat ] = useState([]);
    const [ lon, setLon ] = useState([]);
    const [ weatherData, setWeatherData ] = useState({});

    function onPositionSuccess(pos) {
        const crd = pos.coords;
        setLat(crd.latitude);
        setLon(crd.longitude);
    }
    
    function onPositionError(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(onPositionSuccess, onPositionError);
        if (lat.length < 1 || lon.length < 1 ) { return }
        console.log(lat, lon)

        fetchWeather({lat, lon})
        .then((wd) => {
            setWeatherData(wd);
        })
        .catch((err) => console.warn(err));
    
    }, [lat, lon]);

    return (typeof weatherData != 'undefined' ? <WeatherComponent weatherData={weatherData} /> : <div>No weather</div>)
}

export default Two;