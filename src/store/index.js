import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux-immutable'
import light from './light/light'

const reducers = combineReducers({
  light
})

const store = createStore(reducers, applyMiddleware(thunk))

store.subscribe(() => {
  let state = store.getState().toJS()
  console.log(state)
})

export default store