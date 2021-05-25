import { API_REQUEST_STARTED, API_REQUEST_ENDED } from './action-types';

function actionApiRequestStarted() {
  return { type: API_REQUEST_STARTED };
}

function actionApiRequestEnded() {
  return { type: API_REQUEST_ENDED };
}

export { actionApiRequestStarted, actionApiRequestEnded };
