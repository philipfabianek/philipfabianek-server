import React from "react";

import Professional from "./about/Professional";
import Passionate from "./about/Passionate";

import BottomNavigation from "./reusable/BottomNavigation";
import Copyright from "./reusable/Copyright";

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choosedParagraph: 1
        }
    };

    componentDidMount() {
        document.title = "About | Philip Fabianek Web Developer";
    };

    render() {
        if (typeof document !== "undefined") {
            document.body.onmousemove = (event) => {
                const windowWidth = window.innerWidth;
                const mousePosition = event.clientX;

                if (window.location.pathname === "/about") {
                    if (mousePosition < (windowWidth / 2)) {
                        this.setState(() => ({
                            choosedParagraph: 1
                        }));
                    } else {
                        this.setState(() => ({
                            choosedParagraph: 2
                        }));
                    }
                }
            };
        }

        const firstBlockClass = this.state.choosedParagraph === 1 ?
            "about__block about__block--right about__block--visible" :
            "about__block about__block--right";

        const secondBlockClass = this.state.choosedParagraph === 2 ?
            "about__block about__block--left about__block--visible" :
            "about__block about__block--left";

        return (
            <div className="about">
                <div className="about__top">
                    <h1 className="about__title">
                        ABOUT ME
                    </h1>

                    <div className="about__blocks">

                        <div className={firstBlockClass}>

                            <Passionate />

                        </div>

                        <div className={secondBlockClass}>

                            <Professional />

                        </div>

                    </div>
                </div>

                {/* <div className="about__center">

                </div>

                <div className="about__bottom">
                    <div> */}
                        <BottomNavigation
                            currentPage="about"
                        />
                    {/* </div>
                </div> */}

                {/* <div className="about__copyright">
                    <p className="about__copyright__text">
                        WEBSITE&nbsp;DEVELOPED&nbsp;BY PHILIP&nbsp;FABIANEK ©&nbsp;{new Date().getFullYear()}
                    </p>
                </div> */}

                <Copyright />
            </div>
        );
    };
};
