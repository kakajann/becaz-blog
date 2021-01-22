import Link from 'next/link'
import moment from 'moment'
import Icon from 'components/templates/icon'

interface P {
  blog: BlogItem
}
const HomeBlogListItem = ({ blog }: P) => (
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
