import React from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";

const MyFunctionalComponent = ({ name }) => (
    <div className="component-block">
        <p>Functional component example</p>
        <h1>Hello, {name}</h1>
    </div>
);

MyFunctionalComponent.propTypes = {
    name: PropTypes.string.isRequired
};

export default hot(module)(MyFunctionalComponent);
