export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES'
export const quickPrefix = null

interface UpdateCategoriesAction {
  type: typeof UPDATE_CATEGORIES,
  payload: Category[]
}

export type CategoryActionTypes = UpdateCategoriesAction
