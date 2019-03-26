import React from "react";
import { hot } from "react-hot-loader";
import "./footer.scss";
import AppLogo from "../../shared/appLogo/appLogo";


const Footer = () => (
    <footer className="footer">
        <div className="container">
            <AppLogo/>
        </div>
    </footer>
);

export default hot(module)(Footer);
