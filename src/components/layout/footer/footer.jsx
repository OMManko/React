import React from "react";
import { hot } from "react-hot-loader";
import "./footer.scss";
import AppLogo from "../../shared/app-logo/app-logo";


const Footer = () => (
    <footer className="footer">
        <div className="container">
            <AppLogo/>
        </div>
    </footer>
);

export default hot(module)(Footer);
