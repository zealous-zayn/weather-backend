import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { useSelector, useDispatch } from 'react-redux'



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
    marginBottom: '10px'
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
    marginBottom: '10px'
  }
}));

export default function Listbox(props) {
  
    const state = useSelector(state => state.city)
    const dispatch = useDispatch()

  const classes = useStyles()

function set (index) {
  state.forEach((i,ind)=>{
    if(ind === index){
      i.selected = true
    } else {
      i.selected = false
    }
  })
  let a = state.filter(item => item.selected===true);
        props.onset(a)
        dispatch({type: 'SELECTED', city: state})
}

function getWeather(){
      let a = state.filter(item => item.selected===true);
        props.onclick(a)
}
    return (
      <List>
        {state.map((item, index) => {
          return (
            <div key={index}>
            <ListItem button  
              onClick={() => { set(index); }}
              className={state[index].selected ? classes.root : classes.selected}
            >
              {item.name}
            </ListItem>
            <Divider />
            </div>
          );
        })}
        <Button style={{marginTop:"50px"}} variant="contained" color="primary" onClick={()=>getWeather()} >Get Weather</Button>
      </List>
      
    );
}
