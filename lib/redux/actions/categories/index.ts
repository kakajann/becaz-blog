import * as types from 'lib/redux/actions/categories/types'

export const updateCategories = (categories: Category[]): types.CategoryActionTypes => ({
  type: types.UPDATE_CATEGORIES,
  payload: categories,
})

export const quickPrefix = null
