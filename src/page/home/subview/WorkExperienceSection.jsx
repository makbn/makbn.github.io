import React from "react"
import { EXPERIENCES } from "../../../global"
import ExperienceComponent from "../../../component/ExperienceComponent"
import PropTypes from 'prop-types'

const WorkExperienceSection = ({className, isMobile}) => {
    WorkExperienceSection.propTypes =  {
        className: PropTypes.string.isRequired,
        isMobile: PropTypes.bool.isRequired
    }

    return (
        isMobile ? <DesktopWorkExperienceSection className={className}/> : <MobileWorkExperienceSection className={className}/>
    )
}


const DesktopWorkExperienceSection = ({className}) => {
    DesktopWorkExperienceSection.propTypes =  {
        className: PropTypes.string.isRequired
    }

    return (
        <div className={className}>
            {EXPERIENCES.map((exp, idx) => <ExperienceComponent key={`experience_component_${idx}`} experience={exp}/>)}
        </div>
    )
}

const MobileWorkExperienceSection = ({className}) => {
    MobileWorkExperienceSection.propTypes =  {
        className: PropTypes.string.isRequired
    }

    return (
        <div className={`${className} w-full`}>
            {EXPERIENCES.map((exp, idx) => <ExperienceComponent key={`experience_component_${idx}`} experience={exp}/>)}
        </div>
    )
}

export default WorkExperienceSection