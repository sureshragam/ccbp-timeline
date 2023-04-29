// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {timelineDetails} = props
  console.log(timelineDetails)
  const {courseTitle, duration, description, tagsList} = timelineDetails
  return (
    <div className="course-timeline-card">
      <div className="row">
        <h1>{courseTitle}</h1>
        <div>
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="tags-list-container">
        {tagsList.map(eachTag => (
          <p key={eachTag.id}>{eachTag.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
