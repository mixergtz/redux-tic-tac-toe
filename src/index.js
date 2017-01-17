import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ticTacToeApp from './reducers/index.js'
import DinnerTable from './containers/DinnerTable'
import '../css/style.css'

let store = createStore(ticTacToeApp)

render(
  <Provider store={store}>
    <DinnerTable />
  </Provider>,
  document.getElementById('container')
)
