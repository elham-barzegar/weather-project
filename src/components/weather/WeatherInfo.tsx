import {WeatherIcon} from "@/components/weather/WeatherIcon";

interface Props {
    weather: Weather,
}

export function WeatherInfo({weather}: Props) {
    return (
        <div className={"grid grid-cols-2 mb-12"}>
            <div>
                <h1 className={"text-2xl"}>{weather.city}</h1>
                <div>{weather.description}</div>
                <div>Humidity: <span className={"text-primary"}>{weather.humidity}</span>, wind:<span className={"text-primary"}>{weather.wind} km/h </span></div>
            </div>
            <div className={"flex justify-end"}>
                <WeatherIcon icon={weather.icon} size={46}/>
            </div>

        </div>
    );
}