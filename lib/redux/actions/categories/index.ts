import * as types from 'lib/redux/actions/categories/types'

export const updateCategories = (categories: Category[]): types.CategoryActionTypes => ({
  type: types.UPDATE_CATEGORIES,
  payload: categories,
})

export const setSelectedCategory = (category: SelectedCategory): types.CategoryActionTypes => ({
  type: types.SET_SELECTED_CATEGORY,
  payload: category,
})
