import React from "react";
import { hot } from "react-hot-loader";
import "./movieInfo.scss";
import PropTypes from "prop-types";
import MoviePoster from "../moviePoster/moviePoster";
import { moviePosterSizes } from '../../constants/constants';

const MovieInfo = ({ src, title, genre, year, duration, description }) => (
    <article className="movieInfo">
        <MoviePoster src={src} size={moviePosterSizes.SMALL}/>
        <div className="movieInfo__main">
            <h2 className="movieInfo__title">{title}</h2>
            <div className="movieInfo__genre">{genre}</div>
            <div className="movieInfo__details">
                <span className="movieInfo__year">{year}</span>
                <span className="movieInfo__duration">{duration}</span>
            </div>
            <div className="movieInfo__description">{description}</div>
        </div>
    </article>
);

MovieInfo.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string
};

export default hot(module)(MovieInfo);
