import React from "react";
import Searchbox from "./Searchbox";
import SearchSuggestion from "./SearchSuggestion";
import PROPERTIES from "../../global";
import PropTypes from "prop-types"

export const NameSection = ({className}) => {

    NameSection.propTypes = {
        className: PropTypes.string
    };

    return(
        <div className="h-full flex flex-col gap-4">
            <div className={className}></div>
            <p id="name_section" className="text-8xl grow text-stone-400"> Mehdi <br></br> Akbarian</p>
            <Searchbox/>
            <div className="flex flex-wrap gap-4">
                {PROPERTIES.question_samples.length !== 0 ? PROPERTIES.question_samples.map((sample, key) => (<SearchSuggestion key={`sample_${key}`} question={sample}/>)) : <div> </div> }
            </div>
            <div className="mb-8"></div>
        </div>
    )
};
