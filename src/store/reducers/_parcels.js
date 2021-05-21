import { ADD_PARCEL, REMOVE_PARCEL, UPDATE_PARCEL } from '../action-types';

const initialState = [];

export const parcels = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PARCEL:
      return [payload, ...state];

    case UPDATE_PARCEL:
      return state.map((item) => {
        if (item.id === payload.id) {
          return { ...item, ...payload.data };
        }
        return item;
      });

    case REMOVE_PARCEL:
      return state.filter((item) => item.id !== payload);

    default:
      return state;
  }
};
