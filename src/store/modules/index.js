import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import login from './login'
import home from './home'

export default combineReducers({
  router: routerReducer,
  login,
  home
})
