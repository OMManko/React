import React from "react";
import { hot } from "react-hot-loader";
import "./infoPanel.scss";
import SearchForm from "../searchForm/searchForm";
import MovieInfo from "../movieInfo/movieInfo";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class InfoPanel extends React.Component {
    render () {
        const {
            selectedMovieInfo
        } = this.props;

        return (
            <div className="infoPanel">
                <div className="container">
                    {Object.keys(selectedMovieInfo).length > 0 ?
                        (
                            <MovieInfo movie={selectedMovieInfo}/>
                        ) :
                        (
                            <SearchForm/>
                        )}
                </div>
            </div>
        );
    }
}

InfoPanel.propTypes = {
    selectedMovieInfo: PropTypes.object
};

const mapStateToProps = state => ({
    selectedMovieInfo: state.selectedMovieInfo
});

export default hot(module)(connect(mapStateToProps)(InfoPanel));

