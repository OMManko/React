import React from "react";
import { hot } from "react-hot-loader";
import "./movieInfo.scss";
import PropTypes from "prop-types";
import MoviePoster from "../moviePoster/moviePoster";
import { moviePosterSizes } from '../../constants/constants';
import connect from "react-redux/es/connect/connect";

const MovieInfo = ({ movie }) => (
    <article className="movieInfo">
        <MoviePoster src={movie.poster_path} size={moviePosterSizes.SMALL}/>
        <div className="movieInfo__main">
            <h2 className="movieInfo__title">{movie.title}</h2>
            <div className="movieInfo__genre">{movie.genres.join(', ')}</div>
            <div className="movieInfo__details">
                <span className="movieInfo__year">{new Date(movie.release_date).getUTCFullYear()}</span>
                <span className="movieInfo__duration">{movie.runtime} min</span>
            </div>
            <div className="movieInfo__description">{movie.overview}</div>
        </div>
    </article>
);

MovieInfo.propTypes = {
    movie: PropTypes.object
};

const mapStateToProps = state => ({
    movie: state.selectedMovieInfo
});

export default hot(module)(connect(mapStateToProps)(MovieInfo));

