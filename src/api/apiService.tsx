import axios from 'axios';
import {API_METHOD, API_STATES} from '../constants';
import {BASE_URL} from './api';

// Params interface
interface RequestParams {
  baseUrl: string;
  headers?: any;
  timeout: number;
  method?: string;
}

// helper config
const baseConfig: RequestParams = {
  baseUrl: BASE_URL,
  timeout: 15000,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};

// response handler
interface IResponseBase {
  state: string;
  data: any;
  error: any;
}

// Base Response
const ResponseHandler = (response: any): IResponseBase => {
  if (response.status == 200) {
    return {state: API_STATES.SUCCESS, data: response.data, error: []};
  } else {
    return {state: API_STATES.ERROR, data: [], error: response.response};
  }
};

// exported api service
export const fetchAPI = async (
  url: string,
  method: string,
  data?: any,
  customHeaders?: any,
): Promise<any> => {
  return await axios({
    ...baseConfig,
    url: `${baseConfig.baseUrl}${url}`,
    method: method ?? API_METHOD.GET,
    data,
    headers: {
      ...baseConfig.headers,
      customHeaders,
    },
  })
    .then(response => {
      return ResponseHandler(response);
    })
    .catch(error => {
      return ResponseHandler(error);
    });
};
