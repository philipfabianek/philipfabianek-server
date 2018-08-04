import React from "react";

import Passionate from "./../../../public/images/icons/passionate.png";
import Pricing from "./../../../public/images/icons/pricing.png";

export default (props) => {
    return (
        <div>
            <h2 className="about__block__title">
                PASSIONATE
            </h2>

            <p className="about__block__description about__block__description--first">
                I didn't learn web developent because someone forced me to.
                I did because I enjoyed it.
                And I still do.
                This is the reason why I provide true quality,
                I don't just want to have the work done
                as soon as possible in acceptable condition,
                I want to do it the best way possible.
            </p>

            <img
                alt="Passionate"
                className="about__block__icon about__block__icon--passionate"
                src={Passionate}
            />

            <p className="about__block__description">
                Web development is a fast evolving industry and
                I personally feel like that skill to learn something
                quickly is much more valuable than having a wide skillset.
                <br/>
                <br/>
                The skillset of course comes in handy
                and every professional web developer has it
                but what about the ability
                to learn something completely new without being confused?
                <br/>
                <br/>
                When you say new, what pops in your mind?
                Thing that is 5, 10 or maybe 20 years old?
                In web development, I can assure you that
                new is not more than 1 year.
                Constantly changing your workflow and
                the programs you use may be confusing
                to many people, but this is the only key
                to remain at the top.
            </p>
        </div>
    );
};
