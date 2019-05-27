// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import './movieCard.scss';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Map } from 'immutable';
import MoviePoster from '../moviePoster/moviePoster';
import { moviePosterSizes } from '../../constants/constants';
import { setSelectedMovie } from '../../actions/actions';

type Props = {
    setSelectedMovie: Function,
    movie: Map<Object>,
    history: Object
};

class MovieCard extends React.PureComponent<Props> {
  render() {
    const {
      movie,
      setSelectedMovie,
    } = this.props;

    return (
        <article className="movieCard" onClick={() => setSelectedMovie(movie)}>
            <MoviePoster src={movie.get('poster_path')} size={moviePosterSizes.MEDIUM}/>
            <div className="movieCard__main">
                <Link className="movieCard__title" to={`/film/${movie.get('id')}`}>
                    {movie.get('title')}
                </Link>
                <span className="movieCard__year">{movie.get('release')}</span>
            </div>

            <div className="movieCard__genre">{movie.get('genres').join(', ')}</div>

        </article>

    );
  }
}

const mapDispatchToProps = {
  setSelectedMovie,
};

export default hot(module)(withRouter(connect(null, mapDispatchToProps)(MovieCard)));
