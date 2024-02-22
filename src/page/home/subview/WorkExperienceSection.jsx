import React from "react"
import { EXPERIENCES } from "../../../Global"
import ExperienceComponent from "../../../component/ExperienceComponent"
import PropTypes from 'prop-types'

const WorkExperienceSection = ({className}) => {
    WorkExperienceSection.propTypes =  {
        className: PropTypes.string.isRequired
    }

    return (
        <div className={className}>
            {EXPERIENCES.map((exp, idx) => <ExperienceComponent key={`experience_component_${idx}`} experience={exp}/>)}
        </div>
    )
}

export default WorkExperienceSection