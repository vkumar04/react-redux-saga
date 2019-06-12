import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import rootReducer from './reducers/index'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import App from './components/App'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'))