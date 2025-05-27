import {SearchForm} from "@/components/weather/SearchForm";
import {WeatherInfo} from "@/components/weather/WeatherInfo";
import {ForecastList} from "@/components/weather/ForecastList";

interface props{

}
export function Weather ({}:props){
    return(
        <>

            <SearchForm/>
            <WeatherInfo/>
            <ForecastList/>

        </>
    );
}