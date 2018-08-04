import React from "react";

import { Link } from "react-router-dom";

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        document.title = "Page Not Found | Philip Fabianek Web Developer";
    };

    render() {
        return (
            <div className="landing-page">

                <div className="landing-page__precontent">
                    <div className="landing-page__image"></div>
                    <div className="landing-page__block">

                        {/* <h1 className="landing-page__title">
                            Philip Fabianek
                        </h1> */}

                        <h2 className="landing-page__subtitle landing-page__subtitle--notfound">
                            Page Not Found
                        </h2>

                        <Link
                            className="landing-page__button landing-page__button--notfound"
                            to="/"
                        >
                            Go Home
                        </Link>

                    </div>
                </div>

                <p className="landing-page__copyright">
                    WEBSITE&nbsp;DEVELOPED&nbsp;BY PHILIP&nbsp;FABIANEK ©&nbsp;{new Date().getFullYear()}
                </p>

            </div>
        )
    };
};
