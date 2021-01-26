export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'

interface SetSearchQuery {
  type: typeof SET_SEARCH_QUERY,
  payload: string
}

export type BlogsActionTypes = SetSearchQuery
