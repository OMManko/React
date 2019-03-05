import React from "react";
import {hot} from "react-hot-loader";

class MyReactCreateElement extends React.Component {
    render() {
        return React.createElement('div',  {className: 'component-block'}, React.createElement('p', null, 'Create element example'),
            React.createElement('h1', null, 'Hello, World!')
        );
    }
}

export default hot(module)(MyReactCreateElement);