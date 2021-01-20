import Request from 'lib/helpers/request'
import { updateCategories } from 'lib/redux/actions/categories'
import { ReduxRootState } from 'lib/types/redux'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

interface P {
  dispatchUpdateCategories: (payload: Category[]) => void,
  children: (data: {
    blogs: BlogItem[]
    loading: boolean
  }) => JSX.Element
}

const HomeService = ({ dispatchUpdateCategories, children }: P) => {
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

  const fetchCategories = async () => {
    const { data } = await Request({
      path: 'public/article-categories',
    })

    if (data.success)
      dispatchUpdateCategories(data.data.categories)
  }

  useEffect(() => {
    fetchArticles()
    fetchCategories()
  }, [])

  return children({
    blogs,
    loading,
  })
}

const mapState = ({ category }: ReduxRootState) => ({
  categories: category.categories,
})

const mapDispatch = (dispatch: Dispatch) => ({
  dispatchUpdateCategories: (payload: Category[]) => dispatch(updateCategories(payload)),
})

export default connect(mapState, mapDispatch)(HomeService)
