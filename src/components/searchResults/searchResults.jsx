// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import './searchResults.scss';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { createStructuredSelector } from 'reselect';
import MovieList from '../movieList/movieList';
import NoResults from '../noResults/noResults';
import { selectMoviesList, selectSortOption } from '../../selectors/selectors';

type Props = {
    moviesList: List<Object>,
    selectedSortOption: string,
};

class SearchResults extends React.PureComponent<Props> {
  render() {
    const {
      moviesList,
      selectedSortOption,
    } = this.props;

    const formattedMoviesList = moviesList.map(movie => movie.set('release', new Date(movie.get('release_date')).getUTCFullYear()));

    const sortedMovieList = formattedMoviesList.sort((option1, option2) => option2.get(selectedSortOption) - option1.get(selectedSortOption));

    return (
        <div>
            { moviesList.size > 0
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

const mapStateToProps = createStructuredSelector({
  moviesList: selectMoviesList,
  selectedSortOption: selectSortOption,
});


export default hot(module)(connect(mapStateToProps)(SearchResults));
