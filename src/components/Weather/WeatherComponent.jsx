import moment from "moment";
import WeatherIcon from "./WeatherIcon";
import { FaCloud, FaCloudRain, FaCloudShowersHeavy, FaBolt, FaRegSnowflake, FaSmog } from "react-icons/fa";
import { IoSunny, IoReload } from "react-icons/io5";


function WeatherComponent({weatherData}) {

    const currentDay = moment().format('dddd') + ", " + moment().format('LL');

    const refresh = () => {
        window.location.reload();
    }

    return (
        <div className="weather-card container">
            <div className="weather-card-header row">
                <div className="col">
                    <h1>{weatherData.name}</h1>
                </div>
                <div className="col">
                    <button onClick={refresh}><IoReload/></button>
                </div>
            </div>
            <div className="weather-card-content row">
                <div className="col">
                    <p className="day">{currentDay}</p>
                </div>
                <div className="col">
                    country: {weatherData.country}
                </div>
            </div>
            <div className="weather-card-content row">
                <div className="col">
                    <p className="description">{weatherData.description}</p>
                </div>
                <div className="col">
                    <WeatherIcon description={weatherData.description}/>
                </div>
            </div>
            <div className="weather-card-content row">
                <div className="col">
                    <p className="min">Minimum: {weatherData.min} &deg;C</p>
                </div>
                <div className="col">
                    <p className="max">Maximum: {weatherData.max} &deg;C</p>
                </div>
            </div>
        </div> )
}

export default WeatherComponent;