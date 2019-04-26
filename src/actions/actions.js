import { actionTypes } from "../constants/constants";

export const setResults = results => ({
    type: actionTypes.SEARCH_MOVIES,
    results
});

export const changeSearchOption = option => ({
    type: actionTypes.SEARCH_BY,
    option
});

export const changeSortOption = option => ({
    type: actionTypes.SORT_BY,
    option
});

export const setSelectedMovie = movie => ({
    type: actionTypes.SET_SELECTED_MOVIE,
    movie
});

export const resetSearch = () => ({
    type: actionTypes.RESET_SEARCH
});

export const updateInputValue = value => ({
    type: actionTypes.UPDATE_INPUT_VALUE,
    value
});


export const fetchMovies = (inputValue, filter) => ({
    type: actionTypes.FETCH_MOVIES,
    payload: {
        inputValue,
        filter
    }
});

export const fetchMovie = movieId => ({
    type: actionTypes.FETCH_MOVIE,
    payload: movieId
});
