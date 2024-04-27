import React, { useState } from "react"
import {Card, CardHeader, CardFooter, Button} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faFileCode, faCaretRight, faCode } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"
import Project from "../model/Project";
import ContentComponent from "./ContentComponent";

const ProjectComponent = ({project, showDetailsPanel, isMobile}) => {

    ProjectComponent.propTypes = {
        project: PropTypes.instanceOf(Project).isRequired,
        showDetailsPanel: PropTypes.any.isRequired,
        isMobile: PropTypes.bool.isRequired
    }

    const [isVisible, setIsVisible] = useState(false);
    const onClickAction = () => showDetailsPanel(`Project \\ ${project.name}`, <ProjectFullComponent project={project}/>);

    return(
        <div className="h-full" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            <Card radius="none" shadow="none" className={`${isMobile? "h-[170px]" : "h-[210px]"} border-solid border-1 border-stone-600 bg-transparent`}>
                <CardHeader className="grow absolute z-10 top-1 flex flex-col items-start gap-2">
                    <h4 className={`cursor-pointer text-white/90 font-thin ${isMobile ? "text-l" : "text-xl"} uppercase`} onClick={onClickAction}>{project.name}</h4>
                    <div className="flex flex-row font-medium text-stone-400 justify-center">
                        <FontAwesomeIcon className="mr-2 justify-self-center" icon={faCaretRight}/>
                        <p className="text-tiny text-white/60 uppercase font-bold">{project.short_desc}</p>
                    </div>
                    <div className="grow"></div>
                    {isMobile ? null : <p className="ml-4 self-end line-clamp-3 font-thin">{project.desc}</p>}
                </CardHeader>
               <ProjectActionMenuComponent project={project} isVisible={isVisible} isMobile={isMobile} onClickAction={onClickAction}/>
            </Card>
        </div>
    )
}

const ProjectActionMenuComponent = ({project, isVisible, isMobile, onClickAction}) => {

    ProjectActionMenuComponent.propTypes = {
        project: PropTypes.instanceOf(Project).isRequired,
        isVisible: PropTypes.any.isRequired,
        onClickAction: PropTypes.any.isRequired,
        isMobile: PropTypes.bool.isRequired
    }

    return(
        <CardFooter className={`absolute bg-black/0 bottom-0 z-10 flex flex-row gap-2 h-[50px] transition-all 
            ${ isVisible ? "opacity-100" : "opacity-0"}`}>
            {project.url != null ? 
                <Button isIconOnly size="sm" variant="flat" aria-label="Go to Project Website" 
                    onClick={()=> window.open(`${project.url}?ref=${window.location.href}`, "_blank")}>
                    <FontAwesomeIcon icon={faLink}/>
                </Button>
            : null}

            {project.repo != null ?
                <Button isIconOnly size="sm" variant="flat" aria-label="Go to Project Git Repository"
                    onClick={()=> window.open(`${project.repo}?ref=${window.location.href}`, "_blank")}>
                    <FontAwesomeIcon icon={faFileCode}/>
                </Button>
            : null}

            <div className="grow"></div>
            {isMobile ? null : <Button radius="sm" variant="flat" size="sm" onClick={onClickAction}>Read More!</Button>}
        </CardFooter>
    )
}

const ProjectFullComponent = ({project}) => {
    
    ProjectFullComponent.propTypes = {
        project: PropTypes.instanceOf(Project).isRequired
    }

    return (
        <div className="w-full h-full flex flex-col divide-dashed divide-stone-800 gap-8">
            <ContentComponent className={"mt-8 w-full h-full text-wrap"} content={{"header" : project.name, "content": project.desc}}/>
            <ContentComponent content={{"header": "Additional Links", "content": <AdditionalLinkComponent project={project}/>}}/>
        </div>
    )
}

const AdditionalLinkComponent = ({project}) => {

    AdditionalLinkComponent.propTypes = {
        project: PropTypes.instanceOf(Project).isRequired
    }
    console.log(project.extra)
    const additionalLinks = project.extra.concat([
        {"title": "Project Website", "url": project.url, "icon": faLink},
        {"title": "Project Git Repository", "url": project.repo, "icon": faCode},
    ])
    return(
        <div className="flex flex-col gap-2">
            {additionalLinks.map((item, idx) => 
                <div key={idx} className="flex flex-row cursor-pointer" onClick={() => window.open(`${item.url}?ref=${window.location.href}`, "_blank")}>
                    <FontAwesomeIcon className="mt-1" icon={item.icon}/>
                    <span>{item.title}</span>
                </div>)
            }
        </div>
    )
}

export default ProjectComponent