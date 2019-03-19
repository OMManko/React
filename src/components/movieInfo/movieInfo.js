import React from "react";
import { hot } from "react-hot-loader";
import "./movieInfo.scss";
import PropTypes from "prop-types";


const MovieInfo = (props) => (
    <article className="movieInfo">
        <div className="movieInfo__imgWrapper">
            <img className="movieInfo__img" src={props.src}/>
        </div>
        <div className="movieInfo__main">
            <h2 className="movieInfo__title">{props.title}</h2>
            <div className="movieInfo__genre">{props.genre}</div>
            <div className="movieInfo__details">
                <span className="movieInfo__year">{props.year}</span>
                <span className="movieInfo__duration">{props.duration}</span>
            </div>
            <div className="movieInfo__description">{props.description}</div>
        </div>
    </article>
);

MovieInfo.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default hot(module)(MovieInfo);
