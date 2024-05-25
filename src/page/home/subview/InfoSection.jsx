import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { ScrollShadow } from "@nextui-org/react";
import { INFO_SECTIONS, MOBILE_INFO_SECTIONS } from "../../../global";
import WorkExperienceSection from "./WorkExperienceSection";
import ProjectSection from "./ProjectSection";
import ContactMeSection from "./ContactMeSection";
import AcademicSection from "./AcademicSection";
import TechnologiesSection from "./TechnologiesSection";
import ContentSection from "./ContentSection";
import { ABOUT_ME } from "../../../global";
import { NameSection } from "./NameSection"

export const InfoSection = ({scrollTo, setScrollTo, className, showDetailsPanel}) => {
  InfoSection.propTypes = {
    className: PropTypes.string,
    scrollTo: PropTypes.any,
    setScrollTo: PropTypes.any.isRequired,
    showDetailsPanel: PropTypes.any.isRequired
  };

  const infoSectionSnapScrollRef = useRef();

  useEffect(() => {
    if(scrollTo > 0 && scrollTo <= INFO_SECTIONS.length && infoSectionSnapScrollRef.current.children[scrollTo] != undefined) {
      infoSectionSnapScrollRef.current.children[scrollTo].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } 
    // reset the scroll value to allow re-call this logic 
    setScrollTo(null);
  })

  return (
    <div className={className}>
      <ScrollShadow hideScrollBar radius="sm" ref={infoSectionSnapScrollRef}  className="flex flex-col absolute top-0 left-0 bottom-0 right-0 overflow-y-scroll snap-y snap-mandatory mt-8 mb-8 hide_scrollbar">
          {INFO_SECTIONS.map((item, idx) => 
            <InfoCard 
              key={`info_card_${idx}`} 
              setScrollTo={setScrollTo}
              contentId={item.id} 
              title={item.title} 
              next={idx+1 >= INFO_SECTIONS.length ? null : INFO_SECTIONS[idx+1].title}
              showDetailsPanel={showDetailsPanel}
            />
          )}
      </ScrollShadow>
    </div>
  )
};

export const MobileInfoSection = ({className, showDetailsPanel}) => {
  MobileInfoSection.propTypes = {
    className: PropTypes.string,
    showDetailsPanel: PropTypes.any.isRequired
  };

  return (
    <div className={className}>
      <div id="mobile_info_section_scroll"  className="flex gap-8 flex-col h-full w-screen overflow-y-scroll hide_scrollbar">
          {MOBILE_INFO_SECTIONS.map((item, idx) => 
            <MobileInfoCard 
              key={`info_card_${idx}`} 
              contentId={item.id} 
              title={item.title} 
              showDetailsPanel={showDetailsPanel}
            />
          )}
      </div>
    </div>
  )
};


const InfoCard = ({contentId, title, next, setScrollTo, showDetailsPanel}) => {
  InfoCard.propTypes = {
      contentId: PropTypes.number.isRequired,
      title : PropTypes.string.isRequired,
      next: PropTypes.string,
      setScrollTo: PropTypes.any.isRequired,
      showDetailsPanel: PropTypes.any.isRequired,
      isMobile: PropTypes.bool.isRequired
  }

  return (
      <div className="flex flex-row flex-shrink-0 snap-start snap-always h-full hide_scrollbar">
          <div className="h-full flex flex-row info_card_title border-r-1 border-stone-400 mt-4"> 
              <span className="mt-4 mr-4 whitespace-pre select-none font-thin uppercase text-stone-400">{`//\t\t${title}`}</span>
              <div className="grow text-end mb-6 mr-4 opacity-25">
                  {next != null ? <FontAwesomeIcon icon={faArrowDownLong}/> : null}
              </div> 
              <span className="cursor-pointer next_info_card_caption text-end mb-12 mr-4 select-none font-thin uppercase text-stone-400 opacity-25"
              onClick={() => setScrollTo(contentId + 1)}>{next}</span>
          </div>
          <div className="relative h-full w-full m-2 overflow-y-scroll">
              <Content className="h-full w-full m-10" contentId={contentId} showDetailsPanel={showDetailsPanel} isMobile={false}/>
          </div>
      </div>
  )
}


const MobileInfoCard = ({contentId, title, showDetailsPanel}) => {
  MobileInfoCard.propTypes = {
      contentId: PropTypes.number.isRequired,
      title : PropTypes.string.isRequired,
      next: PropTypes.string,
      setScrollTo: PropTypes.any.isRequired,
      showDetailsPanel: PropTypes.any.isRequired,
      isMobile: PropTypes.bool.isRequired
  }

  return (
      <div className=" w-screen w-max-scree overflow-clip w-svw flex flex-col flex-shrink-0 hide_scrollbar">
          <div className={`w-svw select-none text-center font-extrabold text-lg text-black uppercase banner-wrap ${contentId !=0 ? "mb-12 pt-10" : ""}`}>
            <div className={`relative  banner ${contentId != 0 ? "after:rotate-[6deg]" : "invisible"}`}><span>{title.split("/")[0]}</span></div>
          </div>
          <div className="relative w-svw  overflow-y-scroll overflow-x-clip">
              <Content className="w-svw" contentId={contentId} showDetailsPanel={showDetailsPanel} isMobile={true}/>
          </div>
      </div>
  )
}


export const Content = ({contentId, showDetailsPanel, isMobile}) => {
  Content.propTypes = {
      contentId: PropTypes.number.isRequired,
      showDetailsPanel: PropTypes.any.isRequired,
      isMobile: PropTypes.bool.isRequired
  }

  if (showDetailsPanel == null) {
      throw new Error("Detail Content panel hook can't be null");
  }

  const componentsMap = isMobile ? {
    0: <NameSection className="flex-shrink-0 snap-start snap-always" isMobile={true} />,
    1: <WorkExperienceSection className="flex flex-col gap-8" isMobile={true} />,
    2: <ProjectSection showDetailsPanel={showDetailsPanel} className="ml-4" isMobile={true} />,
    3: <TechnologiesSection isMobile={true} />,
    4: <AcademicSection className="flex flex-col gap-8" />,
    5: <ContentSection content={ABOUT_ME} />,
    6: <ContactMeSection isMobile={true} />,
  } : {
    0: <WorkExperienceSection className="flex flex-col gap-8" isMobile={false} />,
    1: <ProjectSection showDetailsPanel={showDetailsPanel} className="ml-4" isMobile={false} />,
    2: <TechnologiesSection isMobile={false} />,
    3: <AcademicSection className="flex flex-col gap-8" />,
    4: <ContentSection content={ABOUT_ME} />,
    5: <ContactMeSection isMobile={false} />,
  };

  return componentsMap[contentId] || "Hello World!";
}
    