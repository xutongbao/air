import { fromJS } from 'immutable'
import router from './router'

const defaultState = fromJS({
  router,
  collapsed: false,
  userInfo: {},
  appList: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_LIGHT_STATE':
      return state.setIn(action.key, fromJS(action.value))
    default:
      return state
  }
}

export default reducer
