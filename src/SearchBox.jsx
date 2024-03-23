import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { red } from '@mui/material/colors';

 export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "http://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "da411e1cc06c668b1a9782e87f191b16";

    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse =await response.json();
            let result = {
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
             }
             console.log(result);
             return result;
        }
        catch(err){
           throw err;
        }
    }
    function handleChange(evt){
        setCity(evt.target.value)
    }

    let handleSubmit=async(evt)=>{
        try{
            evt.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch{
          setError(true);
        }
       
    }

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit} >
            <TextField id="city-name" label="City name" variant="outlined" value={city} onChange={handleChange} required/> <br /><br />
            <Button variant="contained" type='submit'>Search</Button> <br /><br />
            </form>
            {error && <h3 style={{color:"red"}}><i>No such place exist!!!</i></h3>}

           
        </div>
    )
 }