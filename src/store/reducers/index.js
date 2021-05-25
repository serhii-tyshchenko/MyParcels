import { combineReducers } from 'redux';
import { parcels } from './_parcels';
import { settings } from './_settings';
import { api } from './_api';

const rootReducer = combineReducers({
  parcels,
  settings,
  api,
});

export default rootReducer;
