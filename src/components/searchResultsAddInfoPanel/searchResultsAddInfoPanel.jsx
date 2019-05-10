import React from "react";
import { hot } from "react-hot-loader";
import RadioGroup from "../shared/radioGroup/radioGroup";
import "./searchResultsAddInfoPanel.scss";
import { sortOptions } from '../../constants/constants';
import PropTypes from "prop-types";
import { changeSortOption } from "../../actions/actions";
import { connect } from "react-redux";


class SearchResultsAddInfoPanel extends React.Component {
    render () {
        const {
            total,
            changeCurrentSortOption,
            selectedFilterOption,
            selectedSortOption,
            searchInputValue,
            moviesList,
            selectedMovieInfo
        } = this.props;

        const sortOptionsGroup = [
            {
                id: sortOptions.RELEASE,
                label: "release date",
                checked: selectedSortOption === sortOptions.RELEASE
            },
            {
                id: sortOptions.RATING,
                label: "rating",
                checked: selectedSortOption === sortOptions.RATING
            }
        ];

        const isMovieInfoExists = Object.keys(selectedMovieInfo).length > 0;

        return (
            <div className="searchResultsAddInfoPanel">
                <div className="container">
                    {(moviesList.length > 0 && !isMovieInfoExists) &&
                        (
                            <div className="searchResultsAddInfo">
                                <p>{total} movies found</p>
                                <RadioGroup title="Sort by"
                                    name="sortByField"
                                    handleAction={changeCurrentSortOption}
                                    radios={sortOptionsGroup}
                                />
                            </div>
                        )}
                    {isMovieInfoExists &&
                        <div className="searchResultsAddInfo">
                            <div className="searchResultsAddInfo__displayInfo">
                                <span>Films by</span>
                                <span className="searchResultsAddInfo__displayInfoValue">{searchInputValue} {selectedFilterOption}</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}


SearchResultsAddInfoPanel.propTypes = {
    total: PropTypes.number,
    selectedSortOption: PropTypes.string,
    selectedFilterOption: PropTypes.string,
    searchInputValue: PropTypes.string,
    selectedMovieInfo: PropTypes.object,
    moviesList: PropTypes.array,
    changeCurrentSortOption: PropTypes.func
};

const mapStateToProps = state => ({
    total: state.moviesFound,
    moviesList: state.moviesList,
    selectedSortOption: state.selectedSortOption,
    selectedFilterOption: state.selectedFilterOption,
    searchInputValue: state.searchInputValue,
    selectedMovieInfo: state.selectedMovieInfo
});

const mapDispatchToProps = {
    changeCurrentSortOption: changeSortOption
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(SearchResultsAddInfoPanel));
