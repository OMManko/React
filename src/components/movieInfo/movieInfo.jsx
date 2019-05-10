import React from "react";
import { hot } from "react-hot-loader";
import "./movieInfo.scss";
import PropTypes from "prop-types";
import MoviePoster from "../moviePoster/moviePoster";
import { moviePosterSizes } from '../../constants/constants';
import { connect } from "react-redux";
import { fetchMovie } from "../../actions/actions";
import { withRouter } from "react-router-dom";

class MovieInfo extends React.Component {
    componentDidMount () {
        const id = +this.props.match.params.id;
        this.props.selectMovie(id);
    }

    render () {
        const {
            movie
        } = this.props;

        const genres = movie.genres && movie.genres.join(', ');
        const year = movie.release_date && new Date(movie.release_date).getUTCFullYear();

        return (
            <article className="movieInfo">
                <MoviePoster src={movie.poster_path} size={moviePosterSizes.SMALL}/>
                <div className="movieInfo__main">
                    <h2 className="movieInfo__title">{movie.title}</h2>
                    <div className="movieInfo__genre">{genres}</div>
                    <div className="movieInfo__details">
                        <span className="movieInfo__year">{year}</span>
                        <span className="movieInfo__duration">{movie.runtime} min</span>
                    </div>
                    <div className="movieInfo__description">{movie.overview}</div>
                </div>
            </article>
        );
    }
}


MovieInfo.propTypes = {
    movie: PropTypes.object,
    selectMovie: PropTypes.func,
    match: PropTypes.object,
    params: PropTypes.object
};

const mapStateToProps = state => ({
    movie: state.selectedMovieInfo
});

const mapDispatchToProps = {
    selectMovie: fetchMovie
};

export default hot(module)(withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieInfo)));


