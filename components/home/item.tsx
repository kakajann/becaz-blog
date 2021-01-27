import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { setSelectedCategory } from 'lib/redux/actions/categories'
import Link from 'next/link'
import Router from 'next/router'
import moment from 'moment'
import Icon from 'components/templates/icon'

interface P {
  blog: BlogItem
  dispatchSetSelectedCategory: (payload: SelectedCategory) => void,
}
const HomeBlogListItem = ({ blog, dispatchSetSelectedCategory }: P) => {
  const goToCategory = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatchSetSelectedCategory({
      id: blog.category_id,
      title: blog.category_title,
    })
    Router.push('/', '/')
  }
  return (
    <div className="blog-item">
      <Link href={`/blog/${blog.key}`}>
        <a href={`/blog/${blog.key}`} className="title">{blog.title}</a>
      </Link>
      <p>{blog.abstract}</p>
      <span className="author">
        <Icon title="userSolid" size={16} />
        {blog.author_name}
      </span>
      <div className="more-info">
        <span>
          <a href="/" onClick={goToCategory}>
            <Icon title="barsSolid" size={16} />
            {blog.category_title}
          </a>
        </span>
        <span className="dash">–</span>
        <span>{moment(blog.published_at).format('DD/MM/yyyy')}</span>
      </div>
    </div>
  )
}

const mapDispatch = (dispatch: Dispatch) => ({
  dispatchSetSelectedCategory: (payload:SelectedCategory) => dispatch(setSelectedCategory(payload)),
})

export default connect(() => ({}), mapDispatch)(HomeBlogListItem)
