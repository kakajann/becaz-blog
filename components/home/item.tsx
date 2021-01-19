interface P {
  blog: BlogItem
}
const HomeBlogListItem = ({ blog }: P) => (
  <div className="blog-item">
    <a href="/" className="title">{blog.title}</a>
    <p>{blog.description}</p>
    <span className="author">{blog.author.fullname}</span>
    <div className="more-info">
      <span>
        <a href="/">{blog.category.title}</a>
      </span>
      {' – '}
      <span>{blog.publishedAt}</span>
    </div>
  </div>
)

export default HomeBlogListItem
