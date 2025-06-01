import {SearchForm} from "@/components/weather/SearchForm";
import {WeatherInfo} from "@/components/weather/WeatherInfo";
import {ForecastList} from "@/components/weather/ForecastList";
import {useState} from "react";
import {callForeCastApi, callWeatherApi} from "@/api/api";
import {ForecastResponse} from "@/types/api/ForecastResponse";
import PropTypes, {any} from 'prop-types';
interface props{
    city: string,
}
export function Weather ({city}:props){

    const [weatherState, setWeatherState] = useState<Weather>({
        city: '',
        wind: 0,
        humidity:0,
        description: '',
        icon: '',
        daily: []
    })
    const [forecastState, setForecastState] = useState<ForecastResponse | null>(null);

    const getWeatherData = async (city: string) => {

        const response = await callWeatherApi({city});
        const weather: Weather = {
                city: response.name,
                wind: response.wind.speed,
                humidity: response.main.humidity,
                description: response.weather[0].description,
                icon: response.weather[0].icon,
                daily: []
            };
        setWeatherState(weather);
        console.log(response)



        const forecastResponse = await callForeCastApi({lat: response.coord.lat, lon: response.coord.lon})
        setForecastState(forecastResponse);
    }
    if (weatherState.city.length === 0){
        getWeatherData(city)
    }

    return (
        <div className={"bg-white shadow mt-4 rounded-2xl p-8 py-16"}>

            <SearchForm city={city} getWeatherData={getWeatherData}/>
            <WeatherInfo weather={weatherState}/>
            {forecastState && <ForecastList forecast={forecastState}/>}

        </div>
    );
}