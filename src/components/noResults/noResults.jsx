import React from "react";
import { hot } from "react-hot-loader";
import "./noResults.scss";

const NoResults = () => (
    <h2 className="noResults__title">No films found</h2>
);

export default hot(module)(NoResults);
