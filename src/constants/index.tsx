// == API method constant ==

// method interface
interface IAPIMethod {
  POST: string;
  GET: string;
  PUT: string;
  PATCH: string;
  DELETE: string;
}

export const API_METHOD: IAPIMethod = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

// == API state constant ==

// state interface
interface IAPIStates {
  SUCCESS: string;
  ERROR: string;
}

export const API_STATES: IAPIStates = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};
