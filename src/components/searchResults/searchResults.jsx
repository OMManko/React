import React from "react";
import { hot } from "react-hot-loader";
import "./searchResults.scss";
import MovieList from "../movieList/movieList";
import NoResults from "../noResults/noResults";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class SearchResults extends React.PureComponent {
    render () {
        const {
            moviesList,
            selectedSortOption
        } = this.props;


        const formattedMoviesList = moviesList.map((movie) => {
            movie.release = new Date(movie.release_date).getUTCFullYear();
            return movie;
        });

        formattedMoviesList.sort((option1, option2) => option2[selectedSortOption] - option1[selectedSortOption]);

        return (
            <div>
                <div className="searchResults__wrapper">
                    <div className="container">
                        <div className="searchResults">
                            { moviesList.length > 0 ?
                                (<MovieList movies = {formattedMoviesList}/>) : (<NoResults/>)
                            }
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

SearchResults.propTypes = {
    moviesList: PropTypes.array,
    selectedSortOption: PropTypes.string
};

const mapStateToProps = state => ({
    moviesList: state.moviesList,
    selectedSortOption: state.selectedSortOption
});

export default hot(module)(connect(mapStateToProps)(SearchResults));
