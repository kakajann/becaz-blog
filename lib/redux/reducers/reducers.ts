import CategoryReducer from 'lib/redux/reducers/category'
import { combineReducers } from 'redux'

export default combineReducers({
  category: CategoryReducer,
})
