import React from "react";
import { hot } from "react-hot-loader";
import "./movieCard.scss";
import PropTypes from "prop-types";
import MoviePoster from "../moviePoster/moviePoster";
import { moviePosterSizes } from '../../constants/constants';
import { fetchMovie } from "../../actions/actions";
import { connect } from "react-redux";

const MovieCard = ({ id, src, title, release, genres, selectMovie }) => {
    return (
        <article className="movieCard" onClick={() => selectMovie(id)}>
            <MoviePoster src={src} size={moviePosterSizes.MEDIUM}/>
            <div className="movieCard__main">
                <div className="movieCard__title">{title}</div>
                <span className="movieCard__year">{release}</span>
            </div>
            <div className="movieCard__genre">{genres.join(', ')}</div>
        </article>
    );
};

MovieCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    release: PropTypes.number,
    genres: PropTypes.array,
    src: PropTypes.string,
    rating: PropTypes.number,
    selectMovie: PropTypes.func
};

MovieCard.defaultProps = {
    year: 2000,
    genres: ['Not determined']
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
    selectMovie: fetchMovie
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(MovieCard));
