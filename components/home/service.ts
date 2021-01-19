import Request from 'lib/helpers/request'
import { useState, useEffect } from 'react'

interface P {
  children: (data: {
    blogs: BlogItem[]
    loading: boolean
  }) => JSX.Element
}

const HomeService = ({ children }: P) => {
  const [blogs, setBlogs] = useState<BlogItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchArticles = async () => {
    const { data } = await Request({
      path: 'public/articles',
    })

    if (data.success)
      setBlogs(data.data.articles)

    setLoading(false)
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return children({
    blogs,
    loading,
  })
}

export default HomeService
