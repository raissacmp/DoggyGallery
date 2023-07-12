import { dogsTypes } from '../../Actiontypes/dogsTypes';
import { DogsActions, DogsState } from "../../types/types";

const initialState: DogsState = {
  pending: false,
  dogs: [],
  error: null
};


// eslint-disable-next-line react-refresh/only-export-components
export default (state = initialState, action: DogsActions) => {
  console.log("🚀 ~ file: dogsReducer.tsx:13 ~ action:", action)
  console.log("🚀 ~ file: dogsReducer.tsx:13 ~ state:", state)
  switch (action.type) {
    case dogsTypes.FETCH_DOGS_REQUEST:
      return {
        ...state,
        pending: true
      };
    case dogsTypes.FETCH_DOGS_SUCCESS:
      return {
        ...state,
        pending: false,
        dogs: action.payload.dogs,
        error: null
      };
    case dogsTypes.FETCH_DOGS_FAILURE:
      return {
        ...state,
        pending: false,
        dogs: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
