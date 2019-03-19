import React from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import MovieCard from "../movieCard/movieCard";
import "./movieList.scss";

const MovieList = (props) => (
    <div className="movieList">
        {props.movies.map((movie, i) => {
            return (
                <MovieCard
                    key={i}
                    src={movie.src}
                    title={movie.title}
                    year={movie.year}
                    genre={movie.genre}/>
            );
        })}
    </div>
);

MovieList.propTypes = {
    movies: PropTypes.array
};

export default hot(module)(MovieList);
