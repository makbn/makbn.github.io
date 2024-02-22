import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { ScrollShadow } from "@nextui-org/react";
import { INFO_SECTIONS } from "../../../Global";
import WorkExperienceSection from "./WorkExperienceSection";


export const InfoSection = ({scrollTo, setScrollTo}) => {
  InfoSection.propTypes = {
    scrollTo: PropTypes.any.isRequired,
    setScrollTo: PropTypes.any.isRequired
  };

  typeof(setScrollTo)
  const infoSectionSnapScrollRef = useRef();

  useEffect(() => {
    if(scrollTo == 4) {
      infoSectionSnapScrollRef.current.children[scrollTo].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } 
    // reset the scroll value to allow re-call this logic 
    setScrollTo(null);
  },[scrollTo == 4])

  return (
    <div className="relative h-full w-full mt-8 mb-8">
      <ScrollShadow hideScrollBar radius="sm" ref={infoSectionSnapScrollRef}  className="flex flex-col absolute top-0 left-0 bottom-0 right-0 overflow-y-scroll snap-y snap-mandatory mt-8 mb-8">
          {INFO_SECTIONS.map((item, idx) => 
            <InfoCard 
              key={`info_card_${idx}`} 
              contentId={item.id} 
              title={item.title} 
              next={idx+1 >= INFO_SECTIONS.length ? null : INFO_SECTIONS[idx+1].title}
            />
          )}
      </ScrollShadow>
    </div>
  )
};

const InfoCard = ({contentId, title, next}) => {
  InfoCard.propTypes = {
      contentId: PropTypes.number.isRequired,
      title : PropTypes.string.isRequired,
      next: PropTypes.string.isRequired
  }
  return (
      <div className="flex flex-row flex-shrink-0 snap-start snap-always h-full snap-start">
          <div className="flex flex-row info_card_title border-r-1 border-stone-400 mt-4"> 
              <span className="mt-4 mr-4 whitespace-pre select-none font-thin uppercase text-stone-400">{`//    ${title}`}</span>
              <div className="grow text-end mb-6 mr-4 opacity-25">
                  {next != null ? <FontAwesomeIcon icon={faArrowDownLong}/> : null}
              </div> 
              <span className="text-end mb-12 mr-4 select-none font-thin uppercase text-stone-400 opacity-25">{next}</span>
          </div>
          <div className="relative h-4/5 w-3/4 m-2">
              <Content className="h-full w-full m-10" contentId={contentId}/>
          </div>
      </div>
  )
}


export const Content = ({contentId}) => {
  Content.propTypes = {
      contentId: PropTypes.number.isRequired
  }
  switch(contentId) {
      case 0:
        return (
          <WorkExperienceSection className="flex flex-col gap-16"/>
        );
      default:
        return "Hello World!"
  }
}
    