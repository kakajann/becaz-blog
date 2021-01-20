import { combineReducers } from 'redux'
import CollectionsReducer from 'lib/redux/reducers/category'

export default combineReducers({
  category: CollectionsReducer,
})
