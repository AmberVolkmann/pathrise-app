import { combineReducers } from 'redux';
import jobSourceReducer from './jobSourceReducer';


const rootReducer = combineReducers({
    jobSourceReducer, // GETS ALL JOB SOURCES FROM API
});
  
  export default rootReducer;