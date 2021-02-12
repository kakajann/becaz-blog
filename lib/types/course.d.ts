type CourseAuthor = {
  username: string
  name: string
  surname: string
}

type CourseCategory = {
  id: number
  title: string
}

type CourseFixedPrices = {
  usd: string
  applies: boolean
}

type CoursePrices = {
  usd: string
}

type CourseDetails = {
  key: string,
  title: string,
  level: string,
  thumbnail: string
  prices: CoursePrices
  'fixed_prices': CourseFixedPrices
  'avg_points': number
}

interface Course {
  author: CourseAuthor
  details: CourseDetails
  category: CourseCategory
}
