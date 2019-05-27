import { Map, fromJS } from 'immutable';
import { actionTypes, initialState } from '../constants/constants';

const movieAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_MOVIES:
      return state
        .set('moviesList', fromJS(action.results.data))
        .set('moviesFound', action.results.total);
    case actionTypes.SEARCH_BY:
      return state.set('selectedFilterOption', action.option);
    case actionTypes.SORT_BY:
      return state.set('selectedSortOption', action.option);
    case actionTypes.UPDATE_INPUT_VALUE:
      return state.set('searchInputValue', action.value);
    case actionTypes.SET_SELECTED_MOVIE:
      return state.set('selectedMovieInfo', fromJS(action.movie));
    case actionTypes.RESET_SEARCH:
      return state.set('selectedMovieInfo', Map());
    default:
      return state;
  }
};

export default movieAppReducer;
