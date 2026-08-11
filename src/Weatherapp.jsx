import Searchbox from "./searchbox";
import Infobox from "./infobox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState(
        {
        city:"delhi",
        temp:25.05,
        tempmax:25.05,
        tempmin:25.05,
        humidity:47,
        feelslike:28.84,
        weather:"haze",

    }
    );
    let updateinfo =(newinfo)=>{
        setweatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>WEATHER APP</h2>
            <Searchbox updateinfo={updateinfo}/>
            <Infobox info={weatherInfo}/>
        </div>
    );
}