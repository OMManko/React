// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import './movieInfo.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';
import MoviePoster from '../moviePoster/moviePoster';
import { moviePosterSizes } from '../../constants/constants';
import { fetchMovie } from '../../actions/actions';
import { selectMovieInfo } from '../../selectors/selectors';

type Props = {
    movie: Map<Object>,
    selectMovie: Function,
    match: Object,
    params: Object,
};

class MovieInfo extends React.Component<Props> {
  componentDidMount() {
    const id = +this.props.match.params.id;
    this.props.selectMovie(id);
  }

  render() {
    const {
      movie,
    } = this.props;

    const genres = movie.get('genres') && movie.get('genres').join(', ');
    const year = movie.get('release_date') && new Date(movie.get('release_date')).getUTCFullYear();

    return (
            <article className="movieInfo">
                <MoviePoster src={movie.get('poster_path')} size={moviePosterSizes.SMALL}/>
                <div className="movieInfo__main">
                    <h2 className="movieInfo__title">{movie.get('title')}</h2>
                    <div className="movieInfo__genre">{genres}</div>
                    <div className="movieInfo__details">
                        <span className="movieInfo__year">{year}</span>
                        <span className="movieInfo__duration">{movie.get('runtime')} min</span>
                    </div>
                    <div className="movieInfo__description">{movie.get('overview')}</div>
                </div>
            </article>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  movie: selectMovieInfo,
});

const mapDispatchToProps = {
  selectMovie: fetchMovie,
};

export default hot(module)(withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieInfo)));
