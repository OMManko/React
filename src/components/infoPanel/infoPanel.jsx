import React from "react";
import { hot } from "react-hot-loader";
import "./infoPanel.scss";

const InfoPanel = ({ children }) => (
    <div className="infoPanel">
        <div className="container">
            {children}
        </div>
    </div>
);

export default hot(module)(InfoPanel);

