import React from "react";
import {hot} from "react-hot-loader";
import './app.css';
import MyReactComponent from "./components/myReactComponent"
import MyFunctionalComponent from "./components/myFunctionalComponent"
import MyReactPureComponent from "./components/myReactPureComponent"
import MyReactCreateElement from "./components/myReactCreateElement"

class App extends React.Component{
    render(){
        return(
            <main>
                <MyReactCreateElement/>
                <MyReactComponent/>
                <MyReactPureComponent/>
                <MyFunctionalComponent name="World!"/>
            </main>
    );
    }
}

export default hot(module)(App);