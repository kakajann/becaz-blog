import { useState, useEffect } from 'react'

interface P {
  children: (data: {
    blogs: BlogItem[]
    loading: boolean
  }) => JSX.Element
}

const HomeService = ({ children }: P) => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  }, [])

  return children({
    blogs,
    loading,
  })
}

export default HomeService
