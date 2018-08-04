import React from "react";

import Trustworthy from "./../../../public/images/icons/trustworthy.png";
import Pricing from "./../../../public/images/icons/pricing.png";

export default (props) => {
    return (
        <div>
            <h2 className="about__block__title">
                PROFESSIONAL
            </h2>

            <p className="about__block__description about__block__description--first">
                My goal is to make you
                - my customer -
                100% happy with the product.
                Even if it comprises requirements behind the line,
                I am willing to go there,
                because in the end,
                this is what really matters.
            </p>

            <img
                alt="Trustworthy"
                className="about__block__icon about__block__icon--trustworthy"
                src={Trustworthy}
            />

            <p className="about__block__description">
                I stand behind each and every of my words.
                There is no reason to skew any information,
                because the whole point of business interaction
                is to make both sides as satisfied as possible.
            </p>

            <img
                alt="Pricing"
                className="about__block__icon about__block__icon--pricing"
                src={Pricing}
            />

            <p className="about__block__description">
                The pricing is always the unsure factor,
                but I strive to make it as reasonable as possible.
                I use 2 different types of pricings
                for all of my projects.
                I decide the type of pricing before
                the project begins but after
                I know what does it comprehend.
            </p>
        </div>
    );
};
