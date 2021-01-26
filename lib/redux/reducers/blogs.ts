import * as constants from 'lib/redux/actions/blogs/types'

interface State {
  searchQuery: string,
}

const initialState: State = {
  searchQuery: '',
}

const reducer = (state = initialState, action: constants.BlogsActionTypes): State => {
  switch (action.type) {
    case constants.SET_SEARCH_QUERY:
      return { ...state, ...{ searchQuery: action.payload } }
    default:
      return state
  }
}

export default reducer
