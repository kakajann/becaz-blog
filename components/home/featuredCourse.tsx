import Course from 'components/templates/course'

interface P {
  course: Course
}

const FeaturedCourse = ({ course }: P) => (
  <div id="sidebar-course">
    <h4>Featured Coruses:</h4>
    <Course course={course} />
    <a href="https://becaz.com/">Find more</a>
  </div>
)

export default FeaturedCourse
