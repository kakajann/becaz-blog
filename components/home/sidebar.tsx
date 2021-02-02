import SearchBar from 'components/home/search'
import HomeCategories from 'components/home/categories'
import FeaturedCourse from 'components/home/featuredCourse'
import { isEmptyObject } from 'lib/helpers'

interface P {
  featuredCourse: Course
  loading: boolean
}

const HomeSidebar = ({ featuredCourse, loading }: P) => (
  <div id="sidebar">
    <SearchBar />
    <HomeCategories />
    {!loading && !isEmptyObject(featuredCourse) && (
      <FeaturedCourse course={featuredCourse} />
    )}
  </div>
)

export default HomeSidebar
