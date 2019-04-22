import React from "react";
import { hot } from "react-hot-loader";
import "./header.scss";
import Button from "../../shared/button/button";
import AppLogo from "../../shared/appLogo/appLogo";
import PropTypes from "prop-types";
import { resetSearch } from "../../../actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render () {
        const {
            resetSearch,
            selectedMovieInfo
        } = this.props;

        return (
            <header className="header">
                <div className="container">
                    <div className="header__info">
                        <AppLogo/>
                        {Object.keys(selectedMovieInfo).length > 0 &&
                            <Link to={`/`}>
                                <Button variant="btn--secondary" label="Search" handleAction={resetSearch}/>
                            </Link>
                        }
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    resetSearch: PropTypes.func,
    selectedMovieInfo: PropTypes.object
};

const mapStateToProps = state => ({
    selectedMovieInfo: state.selectedMovieInfo
});

const mapDispatchToProps = {
    resetSearch: resetSearch
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(Header));
