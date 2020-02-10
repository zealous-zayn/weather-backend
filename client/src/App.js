import React from 'react';
import './App.css';
import Listbox from './listbox';
import Result from './result';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'
import image from './background.jpg'
import fetchData from './api.js'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundImage : `url(${image})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat'
 
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height : 100
  },
}));

function App() {

  const selectCity = useSelector(state => state.initialName)
  const dispatch = useDispatch()
  const classes = useStyles();

  function onclick(item){
    if(item.length >0){
    let a = fetchData(item[0].zipcode)
    a.then(data=> dispatch({type: 'INITIAL', initialName: data.data}))
    } else {
      dispatch({type: 'INITIAL', initialName: {name:"Please select one city"}})
    }
   
  }
  function onset(item){
    dispatch({type: 'SELECTED_CITY', selectedCity: item[0]})
  }
  return (
    <div className={classes.root}>
      <Grid container style={{height:"100vh", padding:"10px"}} spacing={0}>
      <Grid style={{padding: "5px"}} item xs={3}><Listbox className={classes.paper} onset={(item)=>onset(item)} onclick={(item)=>onclick(item)} /></Grid>
      <Grid style={{padding: "5px",alignSelf:"center"}} item xs={9}><Result className={classes.paper} data={selectCity} /></Grid>
      </Grid>
    </div>
  );
}


export default App;
