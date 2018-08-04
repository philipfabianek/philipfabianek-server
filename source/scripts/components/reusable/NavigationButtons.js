import React from "react";

import { Link } from "react-router-dom";

export const returnButtons = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return [
        <Link
            onClick={scrollToTop}
            title="Take a look at essential information about me and my professional and passionate approach"
            to="/about"
        >
            <h2
                className="about__redirect__item"
            >

                ABOUT
            </h2>
        </Link>,
        <Link
            onClick={scrollToTop}
            title="Good overview about the design and development of my pages and examples of my work"
            to="/features"
        >
            <h2
                className="about__redirect__item"
            >

                FEATURES
            </h2>
        </Link>,
        <Link
            onClick={scrollToTop}
            title="My portfolio work, view all types of my pages - simple & clean & professional"
            to="/portfolio"
        >
            <h2
                className="about__redirect__item"
            >
                PORTFOLIO
            </h2>
        </Link>,
        <Link
            onClick={scrollToTop}
            title="All the ways to contact me and links to all of my social / work medias"
            to="/contact"
        >
            <h2
                className="about__redirect__item"
            >
                CONTACT
            </h2>
        </Link>
    ];
};
