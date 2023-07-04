export interface DogImage {
  id: string;
  url: string;
}

export interface DogState {
  images: DogImage[];
  loading: boolean;
  error: string | null;
}

export enum DogActionTypes {
  FETCH_DOG_IMAGES = 'FETCH_DOG_IMAGES',
  FETCH_DOG_IMAGES_SUCCESS = 'FETCH_DOG_IMAGES_SUCCESS',
  FETCH_DOG_IMAGES_FAILURE = 'FETCH_DOG_IMAGES_FAILURE',
}

export interface FetchDogImagesAction {
  type: DogActionTypes.FETCH_DOG_IMAGES;
}

export interface FetchDogImagesSuccessAction {
  type: DogActionTypes.FETCH_DOG_IMAGES_SUCCESS;
  payload: DogImage[];
}

export interface FetchDogImagesFailureAction {
  type: DogActionTypes.FETCH_DOG_IMAGES_FAILURE;
  payload: string;
}

export type DogActions =
  | FetchDogImagesAction
  | FetchDogImagesSuccessAction
  | FetchDogImagesFailureAction;