import Layout from 'components/layout'
import Spinner from 'components/templates/spinner'
import BlogService from 'components/blog/service'
import BlogContent from 'components/blog/content'

const Blog = () => (
  <BlogService>
    {({ blog, loading }) => (
      <Layout
        meta={{
          title: blog?.page_title,
          description: blog?.meta_description,
          keywords: blog?.meta_keywords,
        }}
      >
        <div className="container">
          <div id="blog">
            {loading && (
              <Spinner />
            )}

            {!loading && blog && (
              <BlogContent blog={blog} />
            )}
          </div>
        </div>
      </Layout>
    )}
  </BlogService>
)

export default Blog
