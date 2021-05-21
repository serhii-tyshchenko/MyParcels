import { api } from 'services';
import {
  ADD_PARCEL,
  UPDATE_PARCEL,
  REMOVE_PARCEL,
  API_REQUEST_STARTED,
  API_REQUEST_ENDED,
} from '../action-types';

function formatAPIResponse(response) {
  const { Number, CitySender, CityRecipient, Status } = response.data[0];
  return {
    number: Number,
    citySender: CitySender,
    cityRecipient: CityRecipient,
    status: Status,
  };
}

function actionAddParcel(data) {
  return { type: ADD_PARCEL, payload: formatAPIResponse(data) };
}

function isNumberNotFound(data) {
  return data.data[0].StatusCode === '3';
}

export const addParcel = (number) => (dispatch) => {
  dispatch({ type: API_REQUEST_STARTED });
  api
    .getParcelInfo(number)
    .then((data) => {
      if (isNumberNotFound(data)) {
        alert('Number not found!');
        return;
      } else {
        dispatch(actionAddParcel(data));
      }
    })
    .catch((error) => console.log('Error', error))
    .finally(() => dispatch({ type: API_REQUEST_ENDED }));
};

export const updateParcel = (data) => (dispatch) => {
  dispatch({ type: UPDATE_PARCEL, payload: data });
};

export const removeParcel = (id) => (dispatch) => {
  dispatch({ type: REMOVE_PARCEL, payload: id });
};
