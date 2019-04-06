import { actionTypes, initialState } from '../constants/constants';

const movieAppReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_MOVIES:
            return {
                ...state,
                moviesList: action.results.data,
                moviesFound: action.results.total
            };
        case actionTypes.SEARCH_BY:
            return {
                ...state,
                selectedFilterOption: action.option
            };
        case actionTypes.SORT_BY:
            return {
                ...state,
                selectedSortOption: action.option
            };
        case actionTypes.UPDATE_INPUT_VALUE:
            return {
                ...state,
                searchInputValue: action.value
            };
        case actionTypes.GET_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovieInfo: action.movie
            };
        case actionTypes.RESET_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovieInfo: {}
            };
        default:
            return state;
    }
};

export default movieAppReducer;
