import { dogsTypes } from "../../Actiontypes/DogsTypes";

export interface IDog {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface DogsState {
  pending: boolean;
  dogs: IDog[];
  error: string | null;
}

export interface FetchDogsSuccessPayload {
  dogs: IDog[];
}

export interface FetchDogsFailurePayload {
  error: string;
}

export interface FetchDogsRequest {
  type: typeof dogsTypes.FETCH_DOGS_REQUEST;
}

export type FetchDogsSuccess = {
  type: typeof dogsTypes.FETCH_DOGS_SUCCESS;
  payload: FetchDogsSuccessPayload;
};

export type FetchDogsFailure = {
  type: typeof dogsTypes.FETCH_DOGS_FAILURE;
  payload: FetchDogsFailurePayload;
};

export type DogsActions =
  | FetchDogsRequest
  | FetchDogsSuccess
  | FetchDogsFailure;
