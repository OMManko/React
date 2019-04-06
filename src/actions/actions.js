import { endPoint, actionTypes } from "../constants/constants";

export const showResults = results => ({
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

export const getSelectedMovie = movie => ({
    type: actionTypes.GET_SELECTED_MOVIE,
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
        .then(data => dispatch(showResults(data)))
        .catch((e) => {
            console.log(e);
        });
};

export const fetchMovie = (movieId) => (dispatch) => {
    return fetch(`${endPoint}/${movieId}`)
        .then(res => res.json())
        .then(json => dispatch(getSelectedMovie(json)))
        .catch((e) => {
            console.log(e);
        });
};
