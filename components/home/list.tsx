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
        <p>Weird... No blog has found.</p>
        <p>There may be an unexpected error occured. Please try again in few minutes</p>
      </>
    )}

    <div id="blogs-list">
      {!loading && blogs.length > 0 && blogs.map((blog: BlogItem) => (
        <HomeBlogListItem blog={blog} />
      ))}
    </div>

  </div>
)

export default HomeBlogList
