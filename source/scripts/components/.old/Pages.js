import React from "react";

import About from "./pages/About";
import Features from "./pages/Features";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default class Pages extends React.Component {
    constructor(props) {
        super(props);
    };

    componentWillMount() {
        const html = document.getElementsByTagName("html")[0];
        html.style.transition = "none";

        switch (this.props.page) {
            case "about":
                html.style.transform = `translateX(0)`;
                break;
            case "features":
                html.style.transform = `translateX(-100vw)`;
                break;
            case "portfolio":
                html.style.transform = `translateX(-200vw)`;
                break;
            case "contact":
                html.style.transform = `translateX(-300vw)`;
                break;
        };
    };

    transition(margin, urlToPush, fromWhere) {
        const html = document.getElementsByTagName("html")[0];
        const pages = document.getElementsByClassName("pages__page");
        const pagesArray = [].slice.call(pages);

        // const scrollDuration = 800;
        // const perTick = (html.scrollTop) / scrollDuration * 10;
        //     const scroll = () => {
        //     html.scrollTop = html.scrollTop - perTick;
        //     if (html.scrollTop == 0) return;
        //     setTimeout(() => {
        //         scroll();
        //     }, 10);
        // };
        // scroll();

        html.style.transition = "transform 2s ease";
        html.style.transform = `scale(0.5) translateX(${fromWhere})`
        pagesArray.map((page) => {
            page.classList.add("pages__page--transition");
        });

        setTimeout(() => {
            html.style.transform = `scale(0.5) translateX(${margin})`;

            setTimeout(() => {
                html.style.transform = `scale(1) translateX(${margin})`;

                setTimeout(() => {
                    this.props.history.push(urlToPush);
                    pagesArray.map((page) => {
                        page.classList.remove("pages__page--transition");
                    });
                }, 2000);
            }, 2000);
        }, 2000);
    };

    render() {
        return (
            <div className="pages">
                <div className="pages__page pages__page--about">
                    <About
                        history={this.props.history}
                        transition={this.transition.bind(this)}
                    />
                </div>
                <div className="pages__page pages__page--features">
                    <Features
                        history={this.props.history}
                        transition={this.transition.bind(this)}
                    />
                </div>
                <div className="pages__page pages__page--portfolio">
                    <Portfolio
                        history={this.props.history}
                        transition={this.transition.bind(this)}
                    />
                </div>
                <div className="pages__page pages__page--contact">
                    <Contact
                        history={this.props.history}
                        transition={this.transition.bind(this)}
                    />
                </div>
            </div>
        );
    };
};
