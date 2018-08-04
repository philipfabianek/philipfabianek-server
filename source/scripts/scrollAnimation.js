export const getPosition = (className) => {
    if (typeof className !== "undefined") {
        const element = document.getElementsByClassName(className)[0];

        // console.log(element.clientHeight);
        // console.log(element.offsetTop);
        // console.log(window.scrollY);
        // console.log(window.innerHeight);

        const multiplier = .7;

        let percentResult = 0;

        if (window.innerHeight + window.scrollY > element.offsetTop) {
            if (window.innerHeight + window.scrollY > element.offsetTop + element.clientHeight) {
                // console.log("DONE");
                percentResult = 100;
            } else {
                const visible = window.innerHeight + window.scrollY - element.offsetTop;

                const percentAnimate = visible / (element.clientHeight * multiplier);

                if (percentAnimate >= 1) {
                    percentResult = 100;
                    // console.log(percentResult);
                } else {
                    percentResult = Math.round(percentAnimate * 100);
                    // console.log(percentResult);
                }
            }
        }

        return percentResult;
    }
};
