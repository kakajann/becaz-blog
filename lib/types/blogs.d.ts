type Author = {
  fullname: string
}

type Category = {
  id: number
  title: string
}

type BlogItem = {
  title: string
  description: string
  author: Author
  category: Category
  publishedAt: string
}
