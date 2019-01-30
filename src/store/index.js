import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// Reducers
import { reducer as homeReducer } from '../reducers/home'

const reducer = {
  home: homeReducer
}

// Sagas
import homeSaga from '../sagas/home'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers(reducer),
  applyMiddleware(sagaMiddleware)
);


// Run Sagas
sagaMiddleware.run(homeSaga)

export default store
