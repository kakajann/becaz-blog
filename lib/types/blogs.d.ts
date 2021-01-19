type Author = {
  fullname: string
}

type Category = {
  id: number
  title: string
}

type BlogItem = {
  slug: string
  title: string
  description: string
  author: Author
  category: Category
  publishedAt: string
}
