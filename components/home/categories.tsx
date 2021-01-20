import { ReduxRootState } from 'lib/types/redux'
import { connect } from 'react-redux'

interface P {
  categories: Category[]
}

const HomeCategories = ({ categories }: P) => (
  <div id="categories">
    <a href="/" className="active">All Categories</a>
    {categories.map((category) => (
      <a href="/" key={category.id}>{category.title}</a>
    ))}
  </div>
)

const mapState = ({ category }: ReduxRootState) => ({
  categories: category.categories,
})

export default connect(mapState, {})(HomeCategories)
