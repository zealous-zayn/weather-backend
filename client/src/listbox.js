import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  selected : {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
}));

export default function Listbox(props) {
  const cities = [
      { name: "Washington DC", selected: false },
      { name: "California", selected: false },
      { name: "Las Vegas", selected: false }
    ]
  
    useState()

  const classes = useStyles()

function getWeather(){
      
      let a = cities.filter(item => item.selected===true);
        props.onclick(a)
}
    return (
      <List>
        {cities.map((item, index) => {
          return (
            <div key={index}>
            <ListItem button
              onClick={() => { item.selected = true;}}
              className={item.selected ? classes.selected : classes.root}
              key={index}
            >
              {item.name}
            </ListItem>
            <Divider />
            </div>
          );
        })}
        <Button variant="contained" color="primary" onClick={()=>getWeather()} >Get Weather</Button>
      </List>
      
    );
}
