type Category = {
  id: string
  title: string
}

type SelectedCategory = null | Category

type UpdateCategoryActionPayload = {
  categories: Category
}
