import React from "react";
import {Snippet} from "@nextui-org/react";
import PropTypes from 'prop-types'

const SearchSuggestion = ({question}) => {
    SearchSuggestion.propTypes = {
        question: PropTypes.string.isRequired
    };

  return (
    <Snippet onClick={() => alert({question})}size="md" hideCopyButton={true} hideSymbol={true}
      tooltipProps={{
        color: "foreground",
        content: "Search and show information",
        disableAnimation: true,
        placement: "right",
        closeDelay: 0
      }}
    >
      {question}
    </Snippet>
  );
}

export default SearchSuggestion