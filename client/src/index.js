import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import reducer from './reducers/index'
import todoAction from './actions/index'

import App from './components/App'

const store = createStore(reducer);

store.dispatch(todoAction);

ReactDOM.render(

  <App />,

  document.getElementById('root')

)