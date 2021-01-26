import { setSelectedCategory } from 'lib/redux/actions/categories'
import { ReduxRootState } from 'lib/types/redux'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

interface P {
  selectedCategory: SelectedCategory
  categories: Category[]
  dispatchSetSelectedCategory: (payload: SelectedCategory) => void,
}

const HomeCategories = ({ categories, selectedCategory, dispatchSetSelectedCategory }: P) => {
  const selectCategory = (event: React.SyntheticEvent, category: SelectedCategory) => {
    event.preventDefault()
    dispatchSetSelectedCategory(category)
  }
  return (
    <div id="categories">
      <a href="/" className={selectedCategory === null ? 'active' : ''} onClick={(event) => selectCategory(event, null)}>All Categories</a>
      {categories.map((category) => (
        <a
          key={category.id}
          href="/"
          onClick={(event) => selectCategory(event, category)}
          className={selectedCategory?.id === category.id ? 'active' : ''}
        >
          {category.title}
        </a>
      ))}
    </div>
  )
}

const mapState = ({ category }: ReduxRootState) => ({
  categories: category.categories,
  selectedCategory: category.selectedCategory,
})

const mapDispatch = (dispatch: Dispatch) => ({
  dispatchSetSelectedCategory: (payload:SelectedCategory) => dispatch(setSelectedCategory(payload)),
})

export default connect(mapState, mapDispatch)(HomeCategories)
