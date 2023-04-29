// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const items = timelineItemsList.map(eachTimeline => ({
    title: eachTimeline.title,
  }))
  console.log(items)
  return (
    <div className="timeline-view-container">
      <h1>
        MY JOURNEY OF <br />
        CCBP 4.0
      </h1>
      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={items}>
          {timelineItemsList.map(eachTimeline => {
            const {id, categoryId} = eachTimeline
            if (categoryId === 'COURSE') {
              return (
                <CourseTimelineCard key={id} timelineDetails={eachTimeline} />
              )
            }
            return (
              <ProjectTimelineCard key={id} timelineDetails={eachTimeline} />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
