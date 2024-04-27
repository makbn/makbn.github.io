import React from "react"
import { ACADEMIC } from "../../../global"
import ExperienceComponent from "../../../component/ExperienceComponent"
import PropTypes from 'prop-types'

const AcademicSection = ({className, isMobile}) => {
    AcademicSection.propTypes =  {
        className: PropTypes.string.isRequired,
        isMobile: PropTypes.bool.isRequired
    }

    return (
        isMobile ? <MobileAcademicSection className={className}/> : <DesktopAcademicSection className={className} />
    )
}


const DesktopAcademicSection = ({className}) => {
    DesktopAcademicSection.propTypes =  {
        className: PropTypes.string.isRequired
    }

    return (
        <div className={className}>
            {ACADEMIC.map((exp, idx) => <ExperienceComponent key={`academic_component_${idx}`} experience={exp}/>)}
        </div>
    )
}


const MobileAcademicSection = ({className}) => {
    MobileAcademicSection.propTypes =  {
        className: PropTypes.string.isRequired
    }

    return (
        <div className={className}>
            {ACADEMIC.map((exp, idx) => <ExperienceComponent key={`academic_component_${idx}`} experience={exp}/>)}
        </div>
    )
}

export default AcademicSection