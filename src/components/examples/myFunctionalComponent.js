import React from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";

function MyFunctionalComponent (props) {
    return (
        <div className="component-block">
            <p>Functional component example</p>
            <h1>Hello, {props.name}</h1>
        </div>
    );
}

MyFunctionalComponent.propTypes = {
    name: PropTypes.string.isRequired
};

export default hot(module)(MyFunctionalComponent);
