import React from "react";
import { hot } from "react-hot-loader";
import './app.scss';
import Header from "../layout/header/header";
import Main from "../layout/main/main";
import Footer from "../layout/footer/footer";
import ErrorBoundary from "../errorBoundary/errorBoundary";

const App = () => (
    <React.Fragment>
        <ErrorBoundary>
            <div className="wrapper">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </ErrorBoundary>
    </React.Fragment>
);

export default hot(module)(App);
