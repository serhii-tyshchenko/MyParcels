import { UPDATE_SETTINGS } from '../action-types';

export const updateSettings = (data) => (dispatch) => {
  dispatch({ type: UPDATE_SETTINGS, payload: data });
};
