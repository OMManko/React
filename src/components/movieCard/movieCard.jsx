import React from "react";
import { hot } from "react-hot-loader";
import "./movieCard.scss";
import PropTypes from "prop-types";
import MoviePoster from "../moviePoster/moviePoster";
import { moviePosterSizes } from '../../constants/constants';

const MovieCard = ({ src, title, year, genre }) => (
    <article className="movieCard">
        <MoviePoster src={src} size={moviePosterSizes.MEDIUM}/>
        <div className="movieCard__main">
            <a href="#" className="movieCard__title">{title}</a>
            <span className="movieCard__year">{year}</span>
        </div>
        <div className="movieCard__genre">{genre}</div>
    </article>
);

MovieCard.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string,
    src: PropTypes.string
};

MovieCard.defaultProps = {
    year: 2000,
    genre: "Not determined"
};

export default hot(module)(MovieCard);
