import Spinner from 'components/templates/spinner'
import HomeBlogListItem from 'components/home/item'

interface P {
  blogs: BlogItem[]
  loading: boolean
}
const HomeBlogList = ({ blogs, loading }: P) => (
  <div id="blogs">

    {loading && (
      <Spinner />
    )}

    {!loading && !blogs.length && (
      <>
        <p>No blog was found.</p>
      </>
    )}

    <div id="blogs-list">
      {!loading && blogs.length > 0 && blogs.map((blog: BlogItem) => (
        <HomeBlogListItem key={blog.key} blog={blog} />
      ))}
    </div>

  </div>
)

export default HomeBlogList
