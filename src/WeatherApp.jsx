import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city:"Wonderland",
        temp:25,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        feelsLike:28.84,
        weather:"haze",
    })
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <>
        <h1 style={{textAlign:"center"}}>Weather Info By <i> <b>Shamar</b></i> </h1>
         <SearchBox updateInfo={updateInfo}/>
         <InfoBox info={weatherInfo}/>
        </>
    )
}