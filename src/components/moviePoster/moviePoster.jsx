import React from "react";
import { hot } from "react-hot-loader";
import "./moviePoster.scss";
import PropTypes from "prop-types";
import { moviePosterSizes } from '../../constants/constants';
import defaultImage from "../../static/download.jpg";

const MoviePoster = ({ src, size }) => (
    <div className={`moviePoster__imgWrapper  ${size}`}>
        <img className="moviePoster__img" src={src}/>
    </div>
);

MoviePoster.propTypes = {
    src: PropTypes.string,
    size: PropTypes.string
};

MoviePoster.defaultProps = {
    src: defaultImage,
    size: moviePosterSizes.SMALL
};

export default hot(module)(MoviePoster);
