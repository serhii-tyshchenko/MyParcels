import { api } from 'services';
import { v4 as uuidv4 } from 'uuid';
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
    id: uuidv4(),
    title: Number,
    number: Number,
    citySender: CitySender,
    cityRecipient: CityRecipient,
    status: Status,
  };
}

function actionAddParcel(data) {
  return { type: ADD_PARCEL, payload: formatAPIResponse(data) };
}

function isParcelNotFound(data) {
  return data.data[0].StatusCode === '3';
}

export const addParcel = (number) => (dispatch) => {
  dispatch({ type: API_REQUEST_STARTED });
  api
    .getParcelInfo(number)
    .then((data) => {
      if (isParcelNotFound(data)) {
        alert('Parcel not found!');
        return;
      } else {
        dispatch(actionAddParcel(data));
      }
    })
    .catch((error) => console.log('Error', error))
    .finally(() => dispatch({ type: API_REQUEST_ENDED }));
};

export const updateParcel = (id, data) => (dispatch) => {
  dispatch({ type: UPDATE_PARCEL, payload: { id, data } });
};

export const removeParcel = (id) => (dispatch) => {
  dispatch({ type: REMOVE_PARCEL, payload: id });
};
