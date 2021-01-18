interface P {
  blogs: BlogItem[]
  loading: boolean
}
const HomeBlogList = ({ blogs, loading }: P) => (
  <div id="blogs">

    {loading && (
      <p>Loading</p>
    )}

    {!loading && !blogs.length && (
      <>
        <p>Weird... No blog has found.</p>
        <p>There may be an unexpected error occured. Please try again in few minutes</p>
      </>
    )}

    {!loading && blogs.length > 0 && blogs.map(() => (
      <p>Blog</p>
    ))}

  </div>
)

export default HomeBlogList
