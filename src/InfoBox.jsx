import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./InfoBox.css"

export default function InfoBox({info}){
   let RAIN_URL = "https://images.unsplash.com/photo-1565065524861-0be4646f450b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW55fGVufDB8fDB8fHww"
   let HOT_URL = "https://images.unsplash.com/photo-1474174444668-bfc40156c277?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHN1bnxlbnwwfHwwfHx8MA%3D%3D"
   let COLD_URL = "https://images.unsplash.com/photo-1518681313997-d6a78deaa7ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvbGR8ZW58MHx8MHx8fDA%3D"
    return(
        <>
        <div className="InfoBox">
        </div>
        <div className="InfoBox">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 210 }}
        image={info.humidity>80? RAIN_URL : info.temp>20? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <p style={{textAlign:'center'}}>{info.city}&nbsp;{info.humidity>80? <AcUnitIcon/> : info.temp>20? <WbSunnyIcon/> : <ThunderstormIcon/>}</p>
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}</p>
         
        </Typography>
      </CardContent>
      
    </Card>
        </div>
        </>
    )
}