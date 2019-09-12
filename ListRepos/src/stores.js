import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStore, applyMiddleware } from 'redux';

import rootReducers from './reducers';

const client = axios.create({
    baseURL: 'https://api.github.com',
    responseType: 'json'
  });
  
export const store = createStore(rootReducers, applyMiddleware(axiosMiddleware(client)));
