// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {timelineDetails} = props
  console.log(timelineDetails)
  const {
    imageUrl,
    duration,
    projectUrl,
    description,
    projectTitle,
    title,
  } = timelineDetails
  return (
    <div className="project-timeline-card">
      <img src={imageUrl} alt="project" />
      <div className="row">
        <h1>{projectTitle}</h1>
        <div>
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
