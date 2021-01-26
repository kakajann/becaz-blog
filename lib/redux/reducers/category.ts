import * as constants from 'lib/redux/actions/categories/types'

interface State {
  categories: Category[],
  selectedCategory: SelectedCategory
}

const initialState: State = {
  categories: [],
  selectedCategory: null,
}

const reducer = (state = initialState, action: constants.CategoryActionTypes): State => {
  switch (action.type) {
    case constants.UPDATE_CATEGORIES:
      return { ...state, ...{ categories: action.payload } }
    case constants.SET_SELECTED_CATEGORY:
      return { ...state, ...{ selectedCategory: action.payload } }
    default:
      return state
  }
}

export default reducer
