import { getLang } from 'lib/helpers'
import Request from 'lib/helpers/request'
import { updateCategories } from 'lib/redux/actions/categories'
import { ReduxRootState } from 'lib/types/redux'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

interface P {
  searchQuery: string
  selectedCategory: SelectedCategory
  dispatchUpdateCategories: (payload: Category[]) => void
  children: (data: {
    blogs: BlogItem[]
    featuredCourse: Course
    loading: boolean
  }) => JSX.Element
}

const HomeService = ({
  searchQuery, selectedCategory, dispatchUpdateCategories, children,
}: P) => {
  const [blogs, setBlogs] = useState<BlogItem[]>([])
  const [featuredCourse, setFeaturedCourse] = useState<Course>({} as Course)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchArticles = async () => {
    setLoading(true)
    setBlogs([])
    const categoryFilter = selectedCategory ? `catid=${selectedCategory.id}&` : ''
    const searchFilter = searchQuery.length ? `q=${searchQuery}` : ''
    const { data } = await Request({
      path: `public/articles?${categoryFilter}${searchFilter}`,
    })

    if (data.success) {
      setBlogs(data.data.articles)
      setFeaturedCourse(data.data.course)
    }

    setLoading(false)
  }

  const fetchCategories = async () => {
    const { data } = await Request({
      path: 'public/article-categories',
    })

    if (data.success)
      dispatchUpdateCategories(data.data.categories)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchArticles()
  }, [selectedCategory, searchQuery])

  return children({
    blogs,
    featuredCourse,
    loading,
  })
}

const mapState = ({ category, blogs }: ReduxRootState) => ({
  selectedCategory: category.selectedCategory,
  searchQuery: blogs.searchQuery,
})

const mapDispatch = (dispatch: Dispatch) => ({
  dispatchUpdateCategories: (payload: Category[]) => dispatch(updateCategories(payload)),
})

export default connect(mapState, mapDispatch)(HomeService)
