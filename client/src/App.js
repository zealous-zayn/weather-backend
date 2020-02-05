import React, {useState} from 'react';
import './App.css';
import Listbox from './listbox';
import Result from './result';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height : 100
  },
}));

function App() {

  const [name,setName] = useState('not Selected')
  const classes = useStyles();

  function onclick(item){
    console.log(item);
    setName(item[0].name)
  }
    
  return (
    <div className={classes.root}>
      <Grid container style={{height:"100vh"}} spacing={0}>
      <Grid item xs={3}><Listbox className={classes.paper} onclick={(item)=>onclick(item)} /></Grid>
      <Grid item xs={9}><Result className={classes.paper} name={name} /></Grid>
      </Grid>
    </div>
  );
}


export default App;
