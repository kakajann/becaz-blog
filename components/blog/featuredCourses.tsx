import Course from 'components/templates/course'
import Carousel, { ButtonGroupProps } from 'react-multi-carousel'
import responsiveBreakPoints from 'lib/constants/blogFeaturedCourseCarouselResponsive.json'
import Icon from 'components/templates/icon'

interface P {
  courses: Course[]
}

const CarouselButtonGroup = ({ previous, next, carouselState }: ButtonGroupProps) => (
  <div className="arrows">
    <button type="button" onClick={previous} disabled={carouselState?.currentSlide === 0}>
      <Icon title="chevronLeft" size={16} />
    </button>
    <button type="button" onClick={next} disabled={carouselState?.currentSlide === carouselState?.totalItems}>
      <Icon title="chevronLeft" size={16} />
    </button>
  </div>
)

const BlogFeaturedCourses = ({ courses }: P) => (
  <div id="blog-featured-courses">
    <div className="divide" />
    <h5>
      Featured Courses:
      <a href="https://becaz.com">See all</a>
    </h5>

    <Carousel
      responsive={responsiveBreakPoints}
      customButtonGroup={<CarouselButtonGroup />}
      arrows={false}
      swipeable
      infinite
    >
      {courses.map((course) => (
        <div className="course-wrapper">
          <Course course={course} key={course.details.key} />
        </div>
      ))}
    </Carousel>

  </div>
)

export default BlogFeaturedCourses
