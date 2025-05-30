import {ForecastResponse} from "@/types/api/ForecastResponse";
import {WeatherResponse} from "@/types/api/WeatherResponse";

const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '3dce9b1c66837262a25b3f448d354a76';

interface weatherProps {
   city: string,
}
 interface foreCastProps{
   lon: string,
    lat: string,

 }
export async function callWeatherApi ({city}: weatherProps):Promise<WeatherResponse>{

   const response = await fetch(baseUrl + `weather?q=${city}&appid=${apiKey}&units=metric`);

         return await response.json();
}

export async function callForeCastApi ({lat, lon}:foreCastProps): Promise<ForecastResponse>
{
const response =await fetch(baseUrl + `forecast?=${lat}=35.6944&${lon}=51.4215&appid=${apiKey}&units=metric`);
         // 7c203ef54293e2fcbbb07ae643908b2e

         return await response.json();
}