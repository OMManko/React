import React from "react";
import { hot } from "react-hot-loader";
import "./header.scss";
import Button from "../../shared/button/button";
import AppLogo from "../../shared/app-logo/app-logo";

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
                        <AppLogo/>
                        <Button variant="btn--secondary" label="Search" handleAction={this.handleSearchFormOpen}/>
                    </div>
                </div>
            </header>
        );
    }
}
export default hot(module)(Header);
