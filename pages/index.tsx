import Layout from 'components/layout'
import HomeService from 'components/home/service'
import HomeBlogList from 'components/home/list'
import HomeSidebar from 'components/home/sidebar'

const index = () => (
  <Layout>
    <HomeService>
      {({ blogs, loading }) => (
        <div id="home" className="container">
          <HomeBlogList
            blogs={blogs}
            loading={loading}
          />
          <HomeSidebar />
        </div>
      )}
    </HomeService>
  </Layout>
)

export default index
