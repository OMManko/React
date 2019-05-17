// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import './searchResults.scss';
import { connect } from 'react-redux';
import MovieList from '../movieList/movieList';
import NoResults from '../noResults/noResults';

type Props = {
    moviesList: Array<Content>,
    selectedSortOption: string,
};

class SearchResults extends React.PureComponent<Props> {
  render() {
    const {
      moviesList,
      selectedSortOption,
    } = this.props;

    const formattedMoviesList = moviesList.map((movie) => {
      movie.release = new Date(movie.release_date).getUTCFullYear();
      return movie;
    });

    const sortedMovieList = formattedMoviesList.sort((option1, option2) => option2[selectedSortOption] - option1[selectedSortOption]);

    return (
            <div>
                { moviesList.length > 0
                  ? (
                        <div className="searchResults__wrapper">
                            <div className="container">
                                <div className="searchResults">
                                    <MovieList movies = {sortedMovieList}/>
                                </div>
                            </div>
                        </div>
                  ) : (<NoResults/>)
                }
            </div>

    );
  }
}

const mapStateToProps = state => ({
  moviesList: state.moviesList,
  selectedSortOption: state.selectedSortOption,
});

export default hot(module)(connect(mapStateToProps)(SearchResults));
