import React from "react";
import { hot } from "react-hot-loader";
import "./header.scss";
import Button from "../../shared/button/button";
import AppLogo from "../../shared/appLogo/appLogo";
import PropTypes from "prop-types";
import { resetSelectedMovie } from "../../../actions/actions";
import connect from "react-redux/es/connect/connect";

class Header extends React.Component {
    render () {
        const {
            resetSelectedMovie,
            selectedMovieInfo
        } = this.props;

        return (
            <header className="header">
                <div className="container">
                    <div className="header__info">
                        <AppLogo/>
                        {Object.keys(selectedMovieInfo).length > 0 &&
                            <Button variant="btn--secondary" label="Search" handleAction={resetSelectedMovie}/>}
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    resetSelectedMovie: PropTypes.func,
    selectedMovieInfo: PropTypes.object
};

const mapStateToProps = state => ({
    selectedMovieInfo: state.selectedMovieInfo
});

const mapDispatchToProps = {
    resetSelectedMovie: resetSelectedMovie
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(Header));
