import React from "react";
import {hot} from "react-hot-loader";

class MyReactComponent extends React.Component{
    render(){
        return(
            <div className='component-block'>
                <p>React component example</p>
                <h1>Hello, World!</h1>
            </div>
        );
    }
}

export default hot(module)(MyReactComponent);