import * as types from 'lib/redux/actions/blogs/types'

export const setSearchQuery = (query: string): types.BlogsActionTypes => ({
  type: types.SET_SEARCH_QUERY,
  payload: query,
})

export const quickPrefix = null
