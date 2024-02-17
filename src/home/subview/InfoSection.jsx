import React from "react";
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import {ScrollShadow} from "@nextui-org/react";

const INFO_SECTIONS = [
    "Work Experience / Professional Background",
    "Projects",
    "Technologies",
    "Academic Background",
    "About me / Summery",
    "Contact me"
];


export const InfoSection = () => {
    return (
      <div className="relative h-full mt-8 mb-8">
        <div className="flex flex-col absolute top-0 left-0 bottom-0 right-0 overflow-y-scroll snap-y snap-mandatory mt-8 mb-8">
            {INFO_SECTIONS.map((item, idx) => <InfoCard key={`info_card_${idx}`} title={item} next={idx+1 >= INFO_SECTIONS.length ? null : INFO_SECTIONS[idx+1]}/>)}
        </div>
      </div>
    )
};

const InfoCard = ({title, next}) => {
    InfoCard.propTypes = {
        title : PropTypes.string.isRequired,
        next: PropTypes.string.isRequired
    }
    return (
        <ScrollShadow hideScrollBar size={100} className="flex flex-row flex-shrink-0 snap-start snap-always h-full snap-start" radius="sm">
            <div className="flex flex-row info_card_title border-r-1 border-stone-400 mt-4"> 
                <span className="mt-4 mr-4 whitespace-pre select-none font-thin uppercase text-stone-400">{`//    ${title}`}</span>
                <div className="grow text-end mb-4 mr-4 opacity-25">
                    {next != null ? <FontAwesomeIcon icon={faArrowDownLong}/> : null}
                </div> 
                <span className="text-end mb-4 mr-4 select-none font-thin uppercase text-stone-400 opacity-25">{next}</span>
            </div>
            <div className="relative h-4/5 w-3/4 m-2">
                <Content className="h-full w-full m-10"/>
            </div>
        </ScrollShadow>
    )
}


export const Content = () => (
    <div>
      <p>
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.
      </p>
      <p>
        Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
      </p>
      <p>
        Est velit labore esse esse cupidatat. Velit id elit consequat minim. Mollit enim excepteur ea laboris adipisicing aliqua proident occaecat do do adipisicing adipisicing ut fugiat. Consequat pariatur ullamco aute sunt esse. Irure excepteur eu non eiusmod. Commodo commodo et ad ipsum elit esse pariatur sit adipisicing sunt excepteur enim.
      </p>
      <p>
        Incididunt duis commodo mollit esse veniam non exercitation dolore occaecat ea nostrud laboris. Adipisicing occaecat fugiat fugiat irure fugiat in magna non consectetur proident fugiat. Commodo magna et aliqua elit sint cupidatat. Sint aute ullamco enim cillum anim ex. Est eiusmod commodo occaecat consequat laboris est do duis. Enim incididunt non culpa velit quis aute in elit magna ullamco in consequat ex proident.
      </p>
      <p>
        Dolore incididunt mollit fugiat pariatur cupidatat ipsum laborum cillum. Commodo consequat velit cupidatat duis ex nisi non aliquip ad ea pariatur do culpa. Eiusmod proident adipisicing tempor tempor qui pariatur voluptate dolor do ea commodo. Veniam voluptate cupidatat ex nisi do ullamco in quis elit.
      </p>
      <p>
        Cillum proident veniam cupidatat pariatur laborum tempor cupidatat anim eiusmod id nostrud pariatur tempor reprehenderit. Do esse ullamco laboris sunt proident est ea exercitation cupidatat. Do Lorem eiusmod aliqua culpa ullamco consectetur veniam voluptate cillum. Dolor consequat cillum tempor laboris mollit laborum reprehenderit reprehenderit veniam aliqua deserunt cupidatat consequat id.
      </p>
      <p>
        Est id tempor excepteur enim labore sint aliquip consequat duis minim tempor proident. Dolor incididunt aliquip minim elit ea. Exercitation non officia eu id.
      </p>
    </div>
    );
    