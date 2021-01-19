import { useState, useEffect } from 'react'

const exampleData: BlogItem = {
  slug: 'how-do-you-write-text-here-with-no-experience',
  title: 'How do you write text here with no experience',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  author: {
    fullname: 'Adam Smith',
  },
  category: {
    id: 1,
    title: 'Programming',
  },
  publishedAt: '27/04/2012',
}

interface P {
  children: (data: {
    blogs: BlogItem[]
    loading: boolean
  }) => JSX.Element
}

const HomeService = ({ children }: P) => {
  const [blogs, setBlogs] = useState<BlogItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setBlogs([exampleData, exampleData, exampleData])
    setLoading(false)
  }, [])

  return children({
    blogs,
    loading,
  })
}

export default HomeService
