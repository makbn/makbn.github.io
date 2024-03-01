import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { ScrollShadow } from "@nextui-org/react";
import { INFO_SECTIONS } from "../../../Global";
import WorkExperienceSection from "./WorkExperienceSection";
import ProjectSection from "./ProjectSection";
import ContactMeSection from "./ContactMeSection";
import AcademicSection from "./AcademicSection";

export const InfoSection = ({scrollTo, setScrollTo, className, setDetailPanelContent}) => {
  InfoSection.propTypes = {
    className: PropTypes.string,
    scrollTo: PropTypes.any.isRequired,
    setScrollTo: PropTypes.any.isRequired,
    setDetailPanelContent: PropTypes.any.isRequired
  };

  const infoSectionSnapScrollRef = useRef();

  useEffect(() => {
    if(scrollTo > 0 && scrollTo <= INFO_SECTIONS.length && infoSectionSnapScrollRef.current.children[scrollTo] != undefined) {
      infoSectionSnapScrollRef.current.children[scrollTo].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } 
    console.log(scrollTo)
    // reset the scroll value to allow re-call this logic 
    setScrollTo(null);
  })

  return (
    <div className={className}>
      <ScrollShadow hideScrollBar radius="sm" ref={infoSectionSnapScrollRef}  className="flex flex-col absolute top-0 left-0 bottom-0 right-0 overflow-y-scroll snap-y snap-mandatory mt-8 mb-8">
          {INFO_SECTIONS.map((item, idx) => 
            <InfoCard 
              key={`info_card_${idx}`} 
              setScrollTo={setScrollTo}
              contentId={item.id} 
              title={item.title} 
              next={idx+1 >= INFO_SECTIONS.length ? null : INFO_SECTIONS[idx+1].title}
              setDetailPanelContent={setDetailPanelContent}
            />
          )}
      </ScrollShadow>
    </div>
  )
};

const InfoCard = ({contentId, title, next, setScrollTo, setDetailPanelContent}) => {
  InfoCard.propTypes = {
      contentId: PropTypes.number.isRequired,
      title : PropTypes.string.isRequired,
      next: PropTypes.string.isRequired,
      setScrollTo: PropTypes.any.isRequired,
      setDetailPanelContent: PropTypes.any.isRequired
  }

  return (
      <div className="flex flex-row flex-shrink-0 snap-start snap-always h-full snap-start">
          <div className="h-full flex flex-row info_card_title border-r-1 border-stone-400 mt-4"> 
              <span className="mt-4 mr-4 whitespace-pre select-none font-thin uppercase text-stone-400">{`//\t\t${title}`}</span>
              <div className="grow text-end mb-6 mr-4 opacity-25">
                  {next != null ? <FontAwesomeIcon icon={faArrowDownLong}/> : null}
              </div> 
              <span className="cursor-pointer next_info_card_caption text-end mb-12 mr-4 select-none font-thin uppercase text-stone-400 opacity-25"
              onClick={() => setScrollTo(contentId + 1)}>{next}</span>
          </div>
          <div className="relative h-full w-full m-2 overflow-y-scroll">
              <Content className="h-full w-full m-10" contentId={contentId} setDetailPanelContent={setDetailPanelContent}/>
          </div>
      </div>
  )
}


export const Content = ({contentId, setDetailPanelContent}) => {
  Content.propTypes = {
      contentId: PropTypes.number.isRequired,
      setDetailPanelContent: PropTypes.any.isRequired
  }

  if (setDetailPanelContent == null) {
      throw new Error("Detail Content panel hook can't be null");
  }

  switch(contentId) {
      case 0:
        return (
          <WorkExperienceSection className="flex flex-col gap-8"/>
        );
      case 1:
        return (
          <ProjectSection/>
        );
      case 3:
        return (
          <AcademicSection className="flex flex-col gap-8"/>
        );
      case 5:
        return (
          <ContactMeSection/>
        );
      default:
        return "Hello World!"
  }
}
    