import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Request from 'lib/helpers/request'

interface P {
  children: (data: {
    blog: BlogItem | undefined
    featuredCourses: Course[]
    loading: boolean
  }) => JSX.Element
}

const BlogService = ({ children }: P) => {
  const router = useRouter()
  const { key } = router.query

  const [blog, setBlog] = useState<BlogItem>()
  const [featuredCourses, setFeaturedCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchBlog = async () => {
    const { data } = await Request({
      path: `public/articles/${key}`,
    })

    if (data.success) {
      setBlog(data.data.article)
      setFeaturedCourses(data.data.courses)
    }

    setLoading(false)
  }

  useEffect(() => {
    if (key)
      fetchBlog()
  }, [key])

  return children({
    blog,
    loading,
    featuredCourses,
  })
}

export default BlogService
