// API Endpoint and Constant
export const BASE_URL = 'https://jsonplaceholder.typicode.com/';

// Routes
export const USER_GET_ALL = 'users';
export const USER_GET_DETAIL = (id: number): string => {
  return `users/${id}`;
};
