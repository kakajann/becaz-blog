import Icon from 'components/templates/icon'

interface P {
  blog: BlogItem
}
const BlogContent = ({ blog }: P) => (
  <div className="content">
    <h2>{blog.title}</h2>
    <div className="time-read">
      <Icon title="clock" size={16} />
      <span>{blog.read_time}</span>
      <span> min read</span>
    </div>
    <div className="in" dangerouslySetInnerHTML={{ __html: blog.body }} />
  </div>
)

export default BlogContent
