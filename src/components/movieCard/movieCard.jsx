import React from "react";
import { hot } from "react-hot-loader";
import "./movieCard.scss";
import PropTypes from "prop-types";
import MoviePoster from "../moviePoster/moviePoster";
import { moviePosterSizes } from '../../constants/constants';
import { setSelectedMovie } from "../../actions/actions";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

class MovieCard extends React.PureComponent {
    render () {
        const {
            movie,
            setSelectedMovie
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

MovieCard.propTypes = {
    setSelectedMovie: PropTypes.func,
    movie: PropTypes.object,
    history: PropTypes.object
};

MovieCard.defaultProps = {
    year: 2000,
    genres: ['Not determined']
};

const mapDispatchToProps = {
    setSelectedMovie: setSelectedMovie
};

export default hot(module)(withRouter(connect(null, mapDispatchToProps)(MovieCard)));
