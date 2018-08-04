import React from "react";

import { resetElementObjects, addElement, onScroll } from "./../scrollTransition";
import { getPosition } from "./../scrollAnimation";

import BottomNavigation from "./reusable/BottomNavigation";
import Copyright from "./reusable/Copyright";

export default class Features extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // box: undefined,
            // featuresVisible: 50
        }
    };

    componentDidMount() {
        // (
        //     addElement("features__block", "features__block--visible", 200)
        //     addElement("features__block--1", "features__block--visible", 200)
        //     addElement("features__block--2", "features__block--visible", 200)
        //     addElement("features__block--3", "features__block--visible", 200)
        //
        //     addElement("features__box", "features__box--visible", 100, (argument) => {
        //         let title = document.getElementsByClassName("features__box__title")[0];
        //         let description = document.getElementsByClassName("features__box__description")[0];
        //         let boi = document.getElementsByClassName("features__box__boi")[0];
        //
        //         if (argument === "add") {
        //             setTimeout(() => {
        //                 title.classList.add("features__box__title--visible");
        //
        //                 setTimeout(() => {
        //                     description.classList.add("features__box__description--visible");
        //                 }, 200);
        //
        //                 setTimeout(() => {
        //                     boi.classList.add("features__box__boi--visible");
        //                 }, 400);
        //             }, 1000);
        //         } else if (argument === "remove") {
        //             title.classList.remove("features__box__title--visible");
        //             description.classList.remove("features__box__description--visible");
        //             boi.classList.remove("features__box__boi--visible");
        //         };
        //     });
        //
        //     onScroll();
        //
        //     this.setState(() => ({
        //         box: "features__box"
        //     }));
        // )

        document.title = "Features | Philip Fabianek Web Developer";

        resetElementObjects();

        addElement("features__div", "features__div--visible", 160);
        addElement("features__div", "features__div--visible", 160);
        addElement("features__div", "features__div--visible", 160);
        addElement("features__div", "features__div--visible", 160);

        onScroll();
    };

    render() {
        if (typeof window !== "undefined") {
            window.onscroll = () => {
                onScroll();

                // this.setState(() => ({
                //     featuresVisible: 50 + getPosition("features__box") * 0.5
                // }));
            };
        }

        return (
            <div className="features">
                <h1 className="about__title">
                    FEATURES
                </h1>

                <div className="features__div">
                    {/* I always adjust look of the website to needs of my client and way that they fit the targeted public. This includes colors, images and overall manipulation of the website. */}
                    <h2>
                        Responsive design
                    </h2>

                    <p>
                        Every single of the websites / web applications
                        I create is responsible.
                        It looks differently on small,
                        medium and large display devices.
                        <br/>
                        <br/>
                        Since nowadays more than 50% of the traffic visits
                        our websites from their mobile devices,
                        I do follow the "Mobile First Design" -
                        it first loads resources needed
                        for smaller displays and it doesn't even load resources
                        needed for larger devices.
                        Since larger devices usually have a better performance,
                        they can also load files much faster -
                        loading all resources does not affect
                        them as much as it does affect smaller ones
                        such as smartphones.
                    </p>
                </div>

                <div className="features__div">
                    {/* I always adjust look of the website to needs of my client and way that they fit the targeted public. This includes colors, images and overall manipulation of the website. */}
                    <h2>
                        Perfect Images
                    </h2>

                    <p>
                        I always take my time to find just the right images,
                        royalty free of course. Unless you provide me
                        images or give me contact on a professional, I will
                        find and customize fitting images by myself.
                        <br/>
                        <br/>
                        I do have quite some experience with graphics editors
                        and I am currently using Adobe Photoshop (for raster graphics)
                        and Adobe Illustrator (for vector graphics).
                        I usually just adjust the color, brigtness or contract
                        of the image, however sometimes I edit the image itself.
                        <br/>
                        <br/>
                        I usually create more versions of the image
                        for different displays to assure an always
                        good looking image.
                    </p>
                </div>

                <div className="features__div">
                    <h2>
                        Cross-browser functionality
                    </h2>

                    <p>
                        Everything that I do is made to work
                        in all modern browsers.
                        This is very important part
                        of development and
                        I do not skip that at all.
                        This includes the most known browsers both
                        on computer or mobile,
                        for example Google Chrome, Mozilla Firefox,
                        Safari, Opera, Microsoft Edge,
                        Internet Explorer (newer versions),
                        and much more.
                        <br/>
                        <br/>
                        Part of this process is using
                        many different polyfills, compiling my code
                        (both CSS and JavaScript) and using
                        production mode of my libraries.
                    </p>
                </div>

                <div className="features__div">
                    <h2>
                        Source code included
                    </h2>

                    <p>
                        I always include source code
                        when the work is being delivered beside
                        it living in a Git repository.
                        Not only is the project very well structured,
                        but I do follow known patterns
                        both in my CSS and Javasript,
                        for example all my stylesheet properties applied
                        on single element are in logical order (usually alphabetical)
                        and I do use the BEM (block__element--modifier) pattern
                        to apply my CSS classes.
                        <br/>
                        <br/>
                        Use of many NPM libraries is a part of my
                        everyday life and I use them both
                        for my ideal workflow and for the project itself.
                        I write JavaScript code using ES6 / ES7 (ECMAScript)
                        on my daily basis and I often use known
                        Babel plugins that will most likely be part
                        of the next ECMAScript release.
                        I also often create functions
                        that I reuse in many of my projects instead of
                        using a full library.
                    </p>
                </div>

                <div className="features__bottom-navigation">
                    <BottomNavigation
                        currentPage="features"
                    />
                </div>

                {/* <div className="features__box__container">
                    // <style>
                    //     {
                    //         `.features__box {
                    //             width: ${this.state.featuresVisible}%;\
                    //         }`
                    //     }
                    // </style>
                    <div className="features__box">
                        <h1 className="features__box__title">Hello There</h1>
                        <h2 className="features__box__description">
                            Welcome, welcome. Sit down please. Just don't hurry,
                            take your time, take your time...
                        </h2>
                        <h3 className="features__box__boi">
                            Holy Tony in the building
                        </h3>
                    </div>
                </div> */}

                {/* <div className="features__block"></div>
                <div className="features__block features__block--1">
                    <div className="features__textbox">
                        <p>
                            Hello there,<br/>
                            welcome to this page
                        </p>
                    </div>
                </div>
                <div className="features__block features__block--2">
                    <div className="features__textbox">
                        <p>
                            Hello there,<br/>
                            welcome to this page
                        </p>
                    </div>
                </div>
                <div className="features__block features__block--3">
                    <div className="features__textbox">
                        <p>
                            Hello there,<br/>
                            welcome to this page
                        </p>
                    </div>
                </div>
                <div className="features__block"></div> */}

                <Copyright />
            </div>
        );
    };
};
