import { api } from 'services';
import { v4 as uuidv4 } from 'uuid';
import {
  actionApiRequestStarted,
  actionApiRequestEnded,
} from '../action-creators';
import { ADD_PARCEL, UPDATE_PARCEL, REMOVE_PARCEL } from '../action-types';

const formatAPIResponse = (response) => {
  const data = response.data[0];
  return {
    number: data.Number,
    citySender: data.CitySender,
    cityRecipient: data.CityRecipient,
    status: data.Status,
    scheduledDeliveryDate: data.ScheduledDeliveryDate,
    dateCreated: data.DateCreated,
    weight: data.DocumentWeight,
    statusCode: data.StatusCode,
    warehouseRecipient: data.WarehouseRecipientNumber.toString(),
    deliveryCost: Number(data.DocumentCost),
  };
};

const createNewParcel = (data) => ({
  id: uuidv4(),
  title: 'New parcel',
  isArchived: false,
  ...formatAPIResponse(data),
});

const isParcelNotFound = (data) => data.data[0].StatusCode === '3';

const actionAddParcel = (data) => ({
  type: ADD_PARCEL,
  payload: createNewParcel(data),
});

const actionUpdateParcel = (id, data) => ({
  type: UPDATE_PARCEL,
  payload: { id, data },
});

const actionCheckParcelStatus = (id, data) => ({
  type: UPDATE_PARCEL,
  payload: { id, data: formatAPIResponse(data) },
});

const actionRemoveParcel = (id) => ({ type: REMOVE_PARCEL, payload: id });

export const addParcel = (number) => (dispatch) => {
  dispatch(actionApiRequestStarted());
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
    .finally(() => dispatch(actionApiRequestEnded()));
};

export const checkParcelStatus = (id, number) => (dispatch) => {
  dispatch(actionApiRequestStarted());
  api
    .getParcelInfo(number)
    .then((data) => {
      if (isParcelNotFound(data)) {
        alert('Parcel not found!');
        return;
      } else {
        dispatch(actionCheckParcelStatus(id, data));
      }
    })
    .catch((error) => console.log('Error', error))
    .finally(() => dispatch(actionApiRequestEnded()));
};

export const updateParcel = (id, data) => (dispatch) => {
  dispatch(actionUpdateParcel(id, data));
};

export const removeParcel = (id) => (dispatch) => {
  dispatch(actionRemoveParcel(id));
};
