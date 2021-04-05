import { createStore, applyMiddleware, compose } from 'redux';
import { ls } from 'services';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistedState = ls.loadState();
const composeTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  persistedState,
  composeTools(applyMiddleware(thunk))
);
store.subscribe(() => {
  const { parcels } = store.getState();
  ls.saveState({
    parcels,
  });
});

export default store;
