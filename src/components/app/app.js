import React from "react";
import { hot } from "react-hot-loader";
import './app.scss';
import MyReactComponent from "../examples/myReactComponent";
import MyFunctionalComponent from "../examples/myFunctionalComponent";
import MyReactPureComponent from "../examples/myReactPureComponent";
import MyReactCreateElement from "../examples/myReactCreateElement";

class App extends React.Component {
    render () {
        return (
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
