import { api } from 'services';
import {
  ADD_PARCEL,
  UPDATE_PARCEL,
  REMOVE_PARCEL,
  API_REQUEST_STARTED,
  API_REQUEST_ENDED,
} from '../action-types';

export const addParcel = (number) => (dispatch) => {
  dispatch({ type: API_REQUEST_STARTED });
  api
    .getParcelInfo(number)
    .then((data) => dispatch({ type: ADD_PARCEL, payload: data }))
    .catch((error) => console.log('Error'))
    .finally(() => dispatch({ type: API_REQUEST_ENDED }));
};

export const updateParcel = (data) => (dispatch) => {
  dispatch({ type: UPDATE_PARCEL, payload: data });
};

export const removeParcel = (id) => (dispatch) => {
  dispatch({ type: REMOVE_PARCEL, payload: id });
};
