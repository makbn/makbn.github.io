import React from "react"
import { ACADEMIC } from "../../../Global"
import ExperienceComponent from "../../../component/ExperienceComponent"
import PropTypes from 'prop-types'

const AcademicSection = ({className}) => {
    AcademicSection.propTypes =  {
        className: PropTypes.string.isRequired
    }

    return (
        <div className={className}>
            {ACADEMIC.map((exp, idx) => <ExperienceComponent key={`academic_component_${idx}`} experience={exp}/>)}
        </div>
    )
}

export default AcademicSection