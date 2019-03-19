import React from "react";
import { hot } from "react-hot-loader";
import "./header.scss";
import Button from "../../shared/button";

class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}; // is necessary to show/hide search button
    }

    handleSearchFormOpen () {
        console.log("Open search form");
    }

    render () {
        return (
            <header className="header">
                <div className="container">
                    <div className="header__info">
                        <a href="/" className="header__logo">
                            <span className="header__logoText">netflixroulette</span>
                        </a>
                        <Button variant="btn--secondary" label="Search" handleAction={this.handleSearchFormOpen}/>
                    </div>
                </div>
            </header>
        );
    }
}
export default hot(module)(Header);
