import { authorFullName, getLang } from 'lib/helpers'
import Icon from 'components/templates/icon'

interface P {
  course: Course
}

const Course = ({ course }: P) => (
  <div className="course">
    <a href={`https://becaz.com/${getLang()}/courses/preview/${course.details.key}`}>
      <div className="thumbnail">
        <div className="category">{course.category.title}</div>
        <img src={course.details.thumbnail} alt={course.details.title} />
      </div>
      <div className="info">
        <span className="title">{course.details.title}</span>
        <span className="user">
          by
          {' '}
          {authorFullName(course.author)}
        </span>
        <span className="level">{course.details.level}</span>
        <div className="more">
          <div className="rating">
            <Icon title="star" size={22} color="#fbc531" />
            <span>{course.details.avg_points}</span>
          </div>
          <span className="price">
            {parseInt(course.details.prices.usd, 2) > 0 ? (
              <span>
                $
                {course.details.fixed_prices.applices
                  ? course.details.fixed_prices.usd
                  : course.details.prices.usd}
              </span>
            ) : <span>Free</span>}
          </span>
        </div>
      </div>
    </a>
  </div>
)

export default Course
