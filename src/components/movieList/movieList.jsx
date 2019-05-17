// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import { List } from "immutable";
import MovieCard from '../movieCard/movieCard';
import './movieList.scss';

type Props = {
    movies: List<Object>,
};

const MovieList = (props: Props) => (
    <div className="movieList">
        {props.movies.map((movie, i) => (
                <MovieCard
                    movie={movie}
                    key={i}
                />
        ))}
    </div>
);

export default hot(module)(MovieList);
