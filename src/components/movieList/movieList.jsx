import React from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import MovieCard from "../movieCard/movieCard";
import "./movieList.scss";

const MovieList = ({ movies }) => (
    <div className="movieList">
        {movies.map((movie, i) => {
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
    movies: PropTypes.array
};

export default hot(module)(MovieList);
