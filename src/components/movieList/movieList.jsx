import React from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import MovieCard from "../movieCard/movieCard";
import "./movieList.scss";
import { connect } from "react-redux";

const MovieList = ({ moviesList }) => (
    <div className="movieList">
        {moviesList.map((movie, i) => {
            return (
                <MovieCard
                    key={i}
                    id={movie.id}
                    src={movie.poster_path}
                    title={movie.title}
                    release={movie.release}
                    rating={movie.vote_average}
                    genres={movie.genres}/>
            );
        })}
    </div>
);

MovieList.propTypes = {
    moviesList: PropTypes.array
};

const mapStateToProps = state => ({
    moviesList: state.moviesList
});


export default hot(module)(connect(mapStateToProps)(MovieList));
