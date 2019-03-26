import React from "react";
import { hot } from "react-hot-loader";
import "./movieInfo.scss";
import PropTypes from "prop-types";
import MoviePoster from "../moviePoster/moviePoster";
import { moviePosterSizes } from '../../constants/constants';

const MovieInfo = ({ movie }) => (
    <article className="movieInfo">
        <MoviePoster src={movie.src} size={moviePosterSizes.SMALL}/>
        <div className="movieInfo__main">
            <h2 className="movieInfo__title">{movie.title}</h2>
            <div className="movieInfo__genre">{movie.genre}</div>
            <div className="movieInfo__details">
                <span className="movieInfo__year">{movie.year}</span>
                <span className="movieInfo__duration">{movie.duration}</span>
            </div>
            <div className="movieInfo__description">{movie.description}</div>
        </div>
    </article>
);

MovieInfo.propTypes = {
    movie: PropTypes.object
};

export default hot(module)(MovieInfo);
