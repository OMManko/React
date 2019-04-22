import { endPoint, actionTypes } from "../constants/constants";

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

export const resetSelectedMovie = () => ({
    type: actionTypes.RESET_SELECTED_MOVIE
});

export const updateInputValue = value => ({
    type: actionTypes.UPDATE_INPUT_VALUE,
    value
});

export const fetchMovies = (inputValue, filter) => (dispatch) => {
    return fetch(`${endPoint}?searchBy=${filter}&search=${inputValue}`)
        .then(res => res.json())
        .then(data => dispatch(setResults(data)))
        .catch((e) => {
            console.log(e);
        });
};

export const fetchMovie = (movieId) => (dispatch) => {
    return fetch(`${endPoint}/${movieId}`)
        .then(res => res.json())
        .then(json => dispatch(setSelectedMovie(json)))
        .catch(console.log);
};
