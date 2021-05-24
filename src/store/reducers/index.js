import { combineReducers } from 'redux';
import { parcels } from './_parcels';
import { settings } from './_settings';

const rootReducer = combineReducers({
  parcels,
  settings,
});

export default rootReducer;
