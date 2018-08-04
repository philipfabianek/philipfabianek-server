import React from "react";

import { resetElementObjects, addElement, onScroll } from "./../scrollTransition";

import BottomNavigation from "./reusable/BottomNavigation";
import Copyright from "./reusable/Copyright";

export default class Portfolio extends React.Component {
    componentDidMount() {
        document.title = "Portfolio | Philip Fabianek Web Developer";

        resetElementObjects();

        addElement("features__div", "features__div--visible", 160);
        addElement("features__div", "features__div--visible", 160);
        addElement("features__div", "features__div--visible", 160);

        onScroll();
    };

    render() {
        if (typeof window !== "undefined") {
            window.onscroll = () => {
                onScroll();
            };

            window.onresize = () => {
                onScroll();
            };
        }

        return (
            <div className="portfolio">
                <h1 className="about__title">
                    PORTFOLIO
                </h1>

                <div className="features__div">
                    <h2>
                        Miss Freedom Photography
                    </h2>

                    <p>
                        This project is based around a gallery on a website related to an Instagram profile. Customer wanted the functionality of uploading and removing basically any images (anywhere on the site), so that's what I did using simple server side logic.
                        <br/>
                        <br/>
                        It uses and handles POST requests and is developed using React, React-Router, NodeJS, server-side rendering and a few small libraries.
                        <br/>
                        <br/>
                        <a
                            href="https://www.missfreedomphotography.com"
                            target="_blank"
                            title="View Miss Freedom Photography website"
                        >
                            https://www.missfreedomphotography.com
                        </a>
                    </p>
                </div>

                <div className="features__div">
                    <h2>
                        Intrade Home Improvements
                    </h2>

                    <p>
                        Website offers service for windows, doors and boilers in Glasgow, UK. Main feature of the website is a quote process that calculates the estimated prices and offers you to contact the seller. It has aswell many side features / pages.
                        <br/>
                        <br/>
                        This project uses POST requests for handling emails (with Nodemailer) and also uses Google Analytics, AdWords and Facebook Pixel.
                        <br/>
                        <br/>
                        <a
                            href="https://www.intradehomeimprovements.co.uk/"
                            target="_blank"
                            title="View Intrade Home Improvements"
                        >
                            https://www.intradehomeimprovements.co.uk/
                        </a>
                    </p>
                </div>

                <div className="features__div">
                    <h2>
                        Thinking Man's Group
                    </h2>

                    <p>
                        Customer wanted me to create a very flexible & user-friendly website that covers his company's range. The company is based on providing analytics & conversion services.
                        <br/>
                        <br/>
                        It is based on providing the best possible user experience and processing the data to visitor as smoothly as it can get.
                        <br/>
                        <br/>
                        <a
                            href="https://www.thinkingmansgroup.com/"
                            target="_blank"
                            title="View Thinking Man's Group"
                        >
                            https://www.thinkingmansgroup.com/
                        </a>
                    </p>
                </div>

                <div>
                    <BottomNavigation
                        currentPage="portfolio"
                    />
                </div>

                <Copyright />
            </div>
        );
    };
};
