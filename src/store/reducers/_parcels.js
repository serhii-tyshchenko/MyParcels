import { ADD_PARCEL, UPDATE_PARCEL, REMOVE_PARCEL } from '../action-types';

const initialState = [];

export const parcels = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PARCEL:
      return [...state, payload];

    case UPDATE_PARCEL:
      return [...state, payload];

    case REMOVE_PARCEL:
      return state.filter((item) => item.id !== payload);

    default:
      return state;
  }
};
