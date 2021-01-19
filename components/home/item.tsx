import moment from 'moment'
import Icon from 'components/templates/icon'

interface P {
  blog: BlogItem
}
const HomeBlogListItem = ({ blog }: P) => (
  <div className="blog-item">
    <a href="/" className="title">{blog.title}</a>
    <p>{blog.abstract}</p>
    <span className="author">
      <Icon title="userSolid" size={16} />
      {blog.author_name}
    </span>
    <div className="more-info">
      <span>
        <a href="/">
          <Icon title="barsSolid" size={16} />
          {blog.category}
        </a>
      </span>
      <span className="dash">–</span>
      <span>{moment(blog.published_at).format('DD/MM/yyyy')}</span>
    </div>
  </div>
)

export default HomeBlogListItem
