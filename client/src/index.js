import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Provider } from 'react-redux'
import App from './components/App'
import logger from 'redux-logger'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')

)