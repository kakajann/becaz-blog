import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Link from 'next/link'
import Icon from 'components/templates/icon'
import Share from 'components/blog/share'
import moment from 'moment'
import { setSelectedCategory } from 'lib/redux/actions/categories'
import Router from 'next/router'

interface P {
  blog: BlogItem
  dispatchSetSelectedCategory: (payload: SelectedCategory) => void,
}
const BlogContent = ({ blog, dispatchSetSelectedCategory }: P) => {
  const goToCategory = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatchSetSelectedCategory({
      id: blog.category_id,
      title: blog.category_title,
    })
    Router.push('/', '/')
  }
  return (
    <div className="content">
      <Link href="/">
        <a href="/" className="back">
          <Icon title="chevronLeft" size={16} />
          back
        </a>
      </Link>
      <h2>{blog.title}</h2>
      <div className="time-read">
        <Icon title="clock" size={16} />
        <span>{blog.read_time}</span>
        <span> read</span>
      </div>
      <div className="in" dangerouslySetInnerHTML={{ __html: blog.body }} />
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
      <div className="divide" />
      <Share blog={blog} />
    </div>
  )
}

const mapDispatch = (dispatch: Dispatch) => ({
  dispatchSetSelectedCategory: (payload:SelectedCategory) => dispatch(setSelectedCategory(payload)),
})

export default connect(() => ({}), mapDispatch)(BlogContent)
