import express from "express";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";

import React from "react";
import ReactDOM from  "react-dom";
import ReactDOMServer from  "react-dom/server";

import { App } from "./../source/scripts/App";
import { StaticRouter } from "react-router-dom";

const app = express();
app.enable('trust proxy');
const port = process.env.PORT || 3000;

app.use("/dist", express.static(path.join(__dirname, "..", "dist")));
app.use("/assets", express.static(path.join(__dirname, "..", "assets")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    if (req.secure) {
        next();
    } else {
        const redirectUrl = `https://www.philipfabianek.com${req.url}`;
        res.redirect(redirectUrl);
        res.end();
    }
});

// // app.set("trust proxy", true);
// app.use((req, res, next) => {
//     if (req.get("host").indexOf("localhost") >= 0) {
//         next();
//     } else {
//         const redirectUrl = `https://www.philipfabianek.com${req.url}`;
//
//         if (req.protocol != "https") {
//             res.redirect(redirectUrl);
//             res.end();
//         } else {
//             next();
//         }
//
//         // if (req.get("host").indexOf("www") >= 0) {
//         //     if (req.protocol == "https") {
//         //         next();
//         //     } else {
//         //         res.redirect(redirectUrl);
//         //         res.end();
//         //     }
//         // } else {
//         //     res.redirect(redirectUrl);
//         //     res.end();
//         // }
//     }
// });

const renderPage = (req, res) => {
    const context = {};

    const html = ReactDOMServer.renderToStaticMarkup(
        <StaticRouter
            location={req.url}
            context={context}
        >
            <App
                url={req.url}
            />
        </StaticRouter>
    );

    let htmlFilePath = "index.html";

    switch (req.url) {
        case "/":
            htmlFilePath = "index.html";
            break;
        case "/about":
            htmlFilePath = "about.html";
            break;
        case "/features":
            htmlFilePath = "features.html";
            break;
        case "/portfolio":
            htmlFilePath = "portfolio.html";
            break;
        case "/contact":
            htmlFilePath = "contact.html";
            break;
        default:
            htmlFilePath = "404.html";
            break;
    }

    fs.readFile(path.join(__dirname, "html", htmlFilePath), "utf8", (error, data) => {
        if (error) {
            console.log("Error :( ", error);
        };

        const document = data.replace(
            /<div id="app"><\/div>/,
            `<div id="app">${html}</div>`
        );

        res.send(document);
        // res.send(data);
    });
};

app.get("*", renderPage);

app.listen(port);
console.log("Running on port " + port);
