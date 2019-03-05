import React from "react";
import {hot} from "react-hot-loader";

class MyReactPureComponent extends React.PureComponent {
    render(){
        return(
            <div className='component-block'>
                <p>React pure component example</p>
                <h1>Hello, World!</h1>
            </div>
        );
    }
}

export default hot(module)(MyReactPureComponent);