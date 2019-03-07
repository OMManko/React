import React from "react";
import { hot } from "react-hot-loader";

function MyFunctionalComponent (props) {
    return (
        <div className="component-block">
            <p>Functional component example</p>
            <h1>Hello, {props.name}</h1>
        </div>
    );
}

export default hot(module)(MyFunctionalComponent);
