import React from "react"
import ProjectComponent from "../../../component/ProjectComponent"
import Project from "../../../model/Project"
import { PROJECTS } from "../../../Global"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFull } from "@fortawesome/free-solid-svg-icons"

const ProjectSection = () => {
    return (
        <div>
             <div className="flex items-center font-bold text-stone-400 uppercase">
                <FontAwesomeIcon className="mr-2 justify-self-center" icon={faSquareFull}/>
                <p className="mb-2 mt-1">PROFESSIONAL PROJECTS</p>
            </div>
            <div className="grid grid-cols-3 gap-4 auto-rows-auto">
                {PROJECTS.professional.map((proj, idx) => <ProjectComponent key={`proj_prof_${idx}`} project={Object.assign(new Project, proj)}/>)}
            </div>
            <div className="flex items-center font-bold text-stone-400 uppercase">
                <FontAwesomeIcon className="mr-2 justify-self-center" icon={faSquareFull}/>
                <p className="my-2">PERSONAL PROJECTS</p>
            </div>
            <div className="grid grid-cols-3 gap-4 auto-rows-auto">
                {PROJECTS.personal.map((proj, idx) => <ProjectComponent key={`proj_pers_${idx}`} project={Object.assign(new Project, proj)}/>)}
            </div>
        </div>
        
    )
}

export default ProjectSection