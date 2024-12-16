import React from "react"
import Experience from "../model/Experience";
import Company from "../model/Company";
import {Image, Chip} from "@nextui-org/react";
import Skill from "../model/Skill";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";

const ExperienceComponent = ({experience}) => {
    ExperienceComponent.propTypes = {
        experience : PropTypes.instanceOf(Experience).isRequired
    };

    return (
        <div className="w-full flex flext-col justify-start items-start">
            {/* year start-end section */}
            <div className="h-200 flex flex-row experience_year font-thin uppercase mt-2">
                <p>{experience.start}</p>
                <div className="vertical-line"></div>
                <p>{experience.end}</p>
            </div>
            {/* main experience container */}
            <div className="flex flex-col grow">
                <CompanyComponent company={experience.company} title={experience.title}/>
                <SkillComponent skills={experience.getSkills()}/>
                <DescriptionConponent description={experience.getDescriptions()}/>
            </div>
        </div>
    )
}

const CompanyComponent = ({company, title}) => {
    CompanyComponent.propTypes = {
        company: PropTypes.instanceOf(Company).isRequired,
        title: PropTypes.instanceOf(String).isRequired
    };

    return (
        <div className="flex flex-row ml-4 mt-2">
            <Image width={38} height={38} alt={company.name} src={company.icon} className="hover:scale-75 mr-2 rounded-none"/>
            <div  className="flex flex-col ml-4">
                <div className="text-lg">{company.name}</div>
                <div className="flex flex-row">
                    <div className="text-sm text-stone-600">{company.location}</div>
                    <PositionComponent positionTitle={title}/>
                </div>
            </div>
        </div>
    )

}

const SkillComponent = ({skills}) => {
    SkillComponent.propTypes = {
        skills: PropTypes.arrayOf(PropTypes.instanceOf(Skill)).isRequired
    };

    return(
        <div className="flex flex-row gap-2 ml-[54pt] mt-2 flex-wrap">
            {skills.map((skill, idx) => <Chip key={`skill_${idx}`}  size="sm" className="text-stone-600 bg-stone-900">{skill.title}</Chip>)}
        </div>
    )
}

const PositionComponent = ({positionTitle}) => {
    PositionComponent.propTypes = {
        positionTitle: PropTypes.string.isRequired,
    };

    return (
        <div className="flex flex-row text-sm ml-2 text-stone-600 uppercase">
            <p>  | {positionTitle}</p>
        </div>
    )
} 

const DescriptionConponent = ({description}) => {
    DescriptionConponent.propTypes = {
        description: PropTypes.arrayOf(PropTypes.string).isRequired
    };
    return (
        <div className="flex flex-col ml-4 divide-y divide-dashed divide-stone-800 gap-2">
            {description.map((desc, idx)=> 
            <div key={`exp_desc_${idx}`} className="flex flex-row">
                <FontAwesomeIcon className="sm:ml-0 lg:ml-6 mr-4 mt-2 text-stone-400" size="2xs" icon={faCircle}/>
                <div className="font-thin text-stone-400" >{desc}</div>
            </div>)}
        </div>
    )
}

export default ExperienceComponent