import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infobox.css'
export default function Infobox({info}){
    const INIT_URL="https://plus.unsplash.com/premium_photo-1673415819372-e57ae96bb202?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   let HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   let COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
   let RAINY_URl="https://images.unsplash.com/photo-1536329978773-2f8ac431f330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return(
        <div className="infobox">
            
           <div className="cardContainer"><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
          ?RAINY_URl
          :info.temp>15
          ?HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
            <p>Weatherinfo - {info.weather}</p>
        <p>Temperature={info.temp}&deg;c</p>
        <p>Humidity={info.humidity}</p>
       <p>Min temp={info.tempmin}&deg;c</p> 
       <p>Max temp={info.tempmax}&deg;c</p>
       <p> The Weather feels like{info.feelslike}&deg;c</p>
        
        <p></p>
        </Typography>
      </CardContent>
      
    </Card>
    </div> 
            </div>
    );
}