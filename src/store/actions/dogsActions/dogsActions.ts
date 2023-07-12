import { dogsTypes } from "../../Actiontypes/DogsTypes";
import {
  FetchDogsFailure,
  FetchDogsFailurePayload,
  FetchDogsRequest,
  FetchDogsSuccess,
  FetchDogsSuccessPayload
} from "../../types/types";

export const fetchDogsRequest = (): FetchDogsRequest => ({
  type: dogsTypes.FETCH_DOG_REQUEST
});

export const fetchDogsSuccess = (
  payload: FetchDogsSuccessPayload
): FetchDogsSuccess => ({
  type: dogsTypes.FETCH_DOG_SUCCESS,
  payload
});

export const fetchDogsFailure = (
  payload: FetchDogsFailurePayload
): FetchDogsFailure => ({
  type: dogsTypes.FETCH_DOG_FAILURE,
  payload
});
