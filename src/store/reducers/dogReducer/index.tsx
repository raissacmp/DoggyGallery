// dogReducer.ts
import { Reducer } from 'redux';
import { DogState, DogActionTypes, DogActions } from "../../../typings/global";

const initialState: DogState = {
  images: [],
  loading: false,
  error: null,
};

const dogReducer: Reducer<DogState, DogActions> = (state = initialState, action) => {
  switch (action.type) {
    case DogActionTypes.FETCH_DOG_IMAGES:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DogActionTypes.FETCH_DOG_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
        loading: false,
        error: null,
      };
    case DogActionTypes.FETCH_DOG_IMAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dogReducer;