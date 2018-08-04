import React from "react";

import { returnButtons } from "./NavigationButtons";

export default (props) => {
    let array = [
        "about",
        "features",
        "portfolio",
        "contact"
    ];

    let buttonsArray = returnButtons();

    const currentPage = props.currentPage;
    const indexOfCurrentPage = array.indexOf(currentPage);

    if (indexOfCurrentPage > -1) {
        buttonsArray.splice(indexOfCurrentPage, 1);
    }

    return (
        <div className="about__redirect">
            {buttonsArray[0]}
            {buttonsArray[1]}
            {buttonsArray[2]}
        </div>
    );
};
