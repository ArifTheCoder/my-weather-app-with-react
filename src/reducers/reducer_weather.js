import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){

    if(action.error){
        alert('Wrong city name! Please enter a valid city name of Finland!');
        return state;
    }
    switch(action.type){
        case FETCH_WEATHER:
        return [action.payload.data, ...state];   // returns a completely new array with new values
    }

    return state;
}