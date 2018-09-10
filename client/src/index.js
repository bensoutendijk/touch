import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';


import App from './components/App';
import reducers from './reducers';

import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk, logger));

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

registerServiceWorker();
