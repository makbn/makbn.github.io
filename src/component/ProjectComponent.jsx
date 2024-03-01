import React from "react"
import {Card, CardHeader, CardFooter, Button, Textarea} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faFileCode, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"
import Project from "../model/Project";

const ProjectComponent = ({project, showDetailsPanel}) => {

    ProjectComponent.propTypes = {
        project: PropTypes.instanceOf(Project).isRequired,
        showDetailsPanel: PropTypes.any.isRequired
    }
    console.log(showDetailsPanel)
    
    return(
        <div className="h-full">
            <Card radius="none" shadow="none" className="h-[210px] border-solid border-1 border-stone-600 bg-transparent">
                <CardHeader className="grow absolute z-10 top-1 flex flex-col items-start gap-2">
                    <h4 className="text-white/90 font-thin text-xl uppercase">{project.name}</h4>
                    <div className="flex flex-row font-medium text-stone-400 justify-center">
                        <FontAwesomeIcon className="mr-2 justify-self-center" icon={faCaretRight}/>
                        <p className="text-tiny text-white/60 uppercase font-bold">{project.short_desc}</p>
                    </div>
                    <div className="grow"></div>
                    <Textarea
                    variant="underlined"
                    className="self-end"
                    isDisabled
                    defaultValue={project.desc}
                    maxRows={3}
                    />
                </CardHeader>
               
                <CardFooter className="absolute bg-black/0 bottom-0 z-10 flex flex-row gap-2 h-[50px]">
                    <Button isIconOnly size="sm" variant="flat" aria-label="Take a photo">
                        <FontAwesomeIcon icon={faLink}/>
                    </Button>
                    <Button isIconOnly size="sm" variant="flat" aria-label="Take a photo">
                        <FontAwesomeIcon icon={faFileCode}/>
                    </Button>
                    <div className="grow"></div>
                    <Button radius="sm" variant="flat" size="sm" onClick={() => showDetailsPanel(`Project \\ ${project.name}`, <></>)}>Read More!</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ProjectComponent