import { combineReducers } from "redux";
import dogsReducer from "./dogsReducer/dogsReducer";


const rootReducer = combineReducers({
  dogs: dogsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;