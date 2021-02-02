import Layout from 'components/layout'
import HomeService from 'components/home/service'
import HomeBlogList from 'components/home/list'
import HomeSidebar from 'components/home/sidebar'
import SearchBar from 'components/home/search'

const index = () => (
  <Layout>
    <HomeService>
      {({ blogs, featuredCourse, loading }) => (
        <div id="home" className="container">
          <SearchBar />
          <HomeBlogList
            blogs={blogs}
            loading={loading}
          />
          <HomeSidebar
            featuredCourse={featuredCourse}
            loading={loading}
          />
        </div>
      )}
    </HomeService>
  </Layout>
)

export default index
