import React from "react";
import Searchbox from "./Searchbox";
import SearchSuggestion from "./SearchSuggestion";
import properties from "../../global";

export const NameSection = () => (
    <div className="h-full flex flex-col gap-4">
        <div className="mt-8"></div>
        <p id="name_section" className="text-8xl grow text-stone-400"> Mehdi <br></br> Akbarian</p>
        <Searchbox/>
        <div className="flex flex-wrap gap-4">
            {properties.question_samples.length !== 0 ? properties.question_samples.map((sample, key) => (<SearchSuggestion key={`sample_${key}`} question={sample}/>)) : <div> </div> }
        </div>
        <div className="mb-8"></div>
    </div>
);
