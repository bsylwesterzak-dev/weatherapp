import weatherDataReducer from './weatherData';
import appStatesReducer from './states';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    weatherDataReducer,
    appStatesReducer,
})

export default rootReducer;