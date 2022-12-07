export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStarted() {
  return { type: REQUEST_STARTED };
}

function requestSuccessful(infoObj) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: infoObj,
  };
}

function requestFailed(error) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchCharacters() {
  return (dispatch) => {
    dispatch(requestStarted());
    fetch(`https://thronesapi.com/api/v2/Characters`)
      .then(response => response.json())
      .then(data => dispatch(requestSuccessful(data)))
      .catch((error) => dispatch(requestFailed(error)));
  }
}