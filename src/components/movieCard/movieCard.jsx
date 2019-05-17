// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import './movieCard.scss';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import MoviePoster from '../moviePoster/moviePoster';
import { moviePosterSizes } from '../../constants/constants';
import { setSelectedMovie } from '../../actions/actions';

type Props = {
    setSelectedMovie: Function,
    movie: Object,
    history: Object
};

class MovieCard extends React.PureComponent<Props> {
  render() {
    const {
      movie
    } = this.props;

    return (
            <article className="movieCard" onClick={() => setSelectedMovie(movie)}>
                <MoviePoster src={movie.poster_path} size={moviePosterSizes.MEDIUM}/>
                <div className="movieCard__main">
                    <Link className="movieCard__title" to={`/film/${movie.id}`}>
                        {movie.title}
                    </Link>
                    <span className="movieCard__year">{movie.release}</span>
                </div>
                <div className="movieCard__genre">{movie.genres.join(', ')}</div>
            </article>
    );
  }
}

const mapDispatchToProps = {
  setSelectedMovie,
};

export default hot(module)(withRouter(connect(null, mapDispatchToProps)(MovieCard)));
