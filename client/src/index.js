import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'


let initialState = {
    city : [
        {
          name : "Sacramento",
          zipcode : 94203,
          selected : false
        },
        {
          name : "Denver",
          zipcode : 80201,
          selected : false
        },
        {
          name : "Dover",
          zipcode : 19901,
          selected : false
        }
      ],
    initialName : {name:"Please select a city to get a weather details"}
} 
  
  const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'SELECTED':
        return {...state, city : action.city}
      case 'SELECTED_CITY':
        return {...state, city : action.selectedCity} 
      case 'INITIAL':
        return {...state, initialName: action.initialName} 
      default:
        return state
    }
  }
  
  
  
  const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
