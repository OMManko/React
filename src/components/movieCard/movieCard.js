import React from "react";
import { hot } from "react-hot-loader";
import "./movieCard.scss";
import PropTypes from "prop-types";

const MovieCard = (props) => (
    <article className="movieCard">
        <div className="movieCard__imgWrapper">
            <img className="movieCard__img" src={props.src}/>
        </div>
        <div className="movieCard__main">
            <a href="#" className="movieCard__title">{props.title}</a>
            <span className="movieCard__year">{props.year}</span>
        </div>
        <div className="movieCard__genre">{props.genre}</div>
    </article>
);

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};

export default hot(module)(MovieCard);
