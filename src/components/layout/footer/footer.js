import React from "react";
import { hot } from "react-hot-loader";
import "./footer.scss";


const Footer = () => (
    <footer className="footer">
        <div className="container">
            <span className="footer__logo">netflixroulette</span>
        </div>
    </footer>
);

export default hot(module)(Footer);
