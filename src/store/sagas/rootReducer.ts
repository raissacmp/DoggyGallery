// rootReducer.ts
import { combineReducers } from 'redux';
import dogReducer from '../reducers/dogReducer/index';


const rootReducer = combineReducers({
  dogs: dogReducer,
});

export default rootReducer;