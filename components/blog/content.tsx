import Link from 'next/link'
import Icon from 'components/templates/icon'
import Share from 'components/blog/share'
import moment from 'moment'

interface P {
  blog: BlogItem
}
const BlogContent = ({ blog }: P) => (
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
        <a href="/">
          <Icon title="barsSolid" size={16} />
          {blog.category}
        </a>
      </span>
      <span className="dash">–</span>
      <span>{moment(blog.published_at).format('DD/MM/yyyy')}</span>
    </div>
    <div className="divide" />
    <Share blog={blog} />
  </div>
)

export default BlogContent
