import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      height: 500
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },

  });

export default function Result(props) {
    const classes = useStyles();
    if(props.data.base){
        const description = props.data.weather.map((item)=>
        {   
            return item.description
        }
    )
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography style={{textAlign:"center"}} variant="h5" component="h2">
            City Name:- {props.data.name}
            <br/>
            {bull} lon : {props.data.coord.lon}  {bull} lat : {props.data.coord.lat}
          </Typography>
          <Divider />
          <Typography style={{marginTop:"10px"}}  component="h2">
            {bull} Temperature: {props.data.main.temp}
            <br/>
            {bull} Min Temperature: {props.data.main.temp_min}
            <br/>
            {bull} Max Temperature: {props.data.main.temp_max}
            <br/>
            {bull} Feels Like: {props.data.main.feels_like}
            <br/>
            {bull} Pressure: {props.data.main.pressure}
            <br/>
            {bull} Humidity: {props.data.main.humidity}
            <br/>
            {bull} Description: {description}
            <br/>
            {bull} Country: {props.data.sys.country}
            <br/>
            {bull} Sunrise at : {new Date(props.data.sys.sunrise).toString()}
            <br/>
            {bull} Sunset at : {new Date(props.data.sys.sunset).toString()}
          </Typography>
          
        </CardContent>
      </Card>
    );
    } else {
        return(
        <Typography style={{color: "white", fontSize:"30px", textAlign:"center"}}>{props.data.name}</Typography>
        )
    }
    
}
