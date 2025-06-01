import {ForecastItem} from "@/components/weather/ForecastItem";
import {ForecastResponse} from "@/types/api/ForecastResponse";
import {Daily} from "@/types/api/ForecastResponse";

interface Props {
    forecast: ForecastResponse,
}

export function ForecastList({forecast}: Props) {
    console.log(forecast);
    return (
        <div className={"grid grid-cols-8"}>
            {
                forecast?.daily?.map((item: Daily) =>{
               return<ForecastItem item={item}/>
            })
        }


        </div>
    );
}