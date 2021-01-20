import * as constants from 'lib/redux/actions/categories/types'

interface State {
  categories: Category[]
}

const initialState: State = {
  categories: [],
}

const reducer = (state = initialState, action: constants.CategoryActionTypes): State => {
  switch (action.type) {
    case constants.UPDATE_CATEGORIES:
      return { ...initialState, ...{ categories: action.payload } }
    default:
      return state
  }
}

export default reducer
