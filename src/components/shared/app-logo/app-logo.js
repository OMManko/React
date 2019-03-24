import React from "react";
import { hot } from "react-hot-loader";
import "./app-logo.scss";


const AppLogo = () => (
    <a href="/" className="app__logo">
        <span className="app__logoText">netflixroulette</span>
    </a>
);

export default hot(module)(AppLogo);
