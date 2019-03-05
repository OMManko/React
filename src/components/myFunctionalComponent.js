import React from "react";
import {hot} from "react-hot-loader";

class MyFunctionalComponent extends React.Component {
    render(){
        return(
            <div className='component-block'>
                <p>Functional component example</p>
                <h1>Hello, {this.props.name}</h1>
            </div>
        );
    }
}

export default hot(module)(MyFunctionalComponent);