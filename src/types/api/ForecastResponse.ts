export interface ForecastResponse {

    lon: number,
    lat: number,
    timezone: string,
    timezone_offset: number,
    humidity: number,
    current: Current
    hourly: Hourly[],
    daily: Daily[],

}

interface Current {
    dt: number
    sunrise: number,
    sunset:number,
    temp: number,
    main: Main
    clouds: Clouds
    wind: Wind
    visibility: number
    pop: number
    sys: Sys
    dt_txt: string
    weather: Weather[]

}

interface Weather{
    id: number
    main: string
    description: string
    icon: string
}
interface Hourly{
    dt: number
    sunrise: number,
    sunset:number,
    temp: number,
    main: Main
    clouds: Clouds
    wind: Wind
    visibility: number
    pop: number
    sys: Sys
    dt_txt: string
    weather: Weather2[]
}

interface Weather2 {
    id: number
    main: string
    description: string
    icon: string
}
export interface Daily{
    dt: number
    sunrise: number,
    sunset:number,
    moonrise: number
    moonset: number
    moon_phase: number
    feels_like: feelsLike
    temp: Temp,
    main: Main
    clouds: number
    humidity: number
    pressure: number
    wind: Wind
    wind_speed: number
    visibility: number
    pop: number
    sys: Sys
    dt_txt: string
    weather: Weather3[]
    rain?:number

}
export interface Temp{
       day: number
        min: number
        max: number
        night:number
        eve: number
        morn: number

}

interface feelsLike{
    day: number
    night:number
    eve: number
    morn: number
}


interface Weather3 {
    id: number
    main: string
    description: string
    icon: string
}


export interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
}


interface Clouds {
    all: number
}

interface Wind {
    speed: number
    deg: number
    gust: number
}

interface Sys {
    pod: string
}

interface City {
    id: number
    name: string
    coord: Coord
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
}

interface Coord {
    lat: number
    lon: number
}


type WeatherResponse = {
    cod: string;
    message: number;
    cnt: number;
    list: Forecast[];
};

type Forecast = {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    sys: Sys;
    dt_txt: string;
};

type Main = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
};


type Clouds = {
    all: number;
};

type Wind = {
    speed: number;
    deg: number;
    gust: number;
};

type Sys = {
    pod: string;
};