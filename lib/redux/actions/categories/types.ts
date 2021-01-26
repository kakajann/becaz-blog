export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES'
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY'

interface UpdateCategoriesAction {
  type: typeof UPDATE_CATEGORIES,
  payload: Category[]
}

interface SetSelectedCategory {
  type: typeof SET_SELECTED_CATEGORY,
  payload: SelectedCategory
}

export type CategoryActionTypes = UpdateCategoriesAction | SetSelectedCategory
