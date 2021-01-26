import CategoryReducer from 'lib/redux/reducers/category'
import BlogsReducer from 'lib/redux/reducers/blogs'
import { combineReducers } from 'redux'

export default combineReducers({
  category: CategoryReducer,
  blogs: BlogsReducer,
})
