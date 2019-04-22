import React from 'react';
import movieAppReducer from './reducers';
import { actionTypes, filterOptions, sortOptions } from "../constants/constants";
import { initialState } from "../constants/constants";

describe('<movieAppReducer />', () => {
    it('should return the initial state', () => {
        expect(movieAppReducer(undefined, {})).toMatchSnapshot();
    });

    it('should handle SEARCH_MOVIES', () => {
         const results = {
             data: [{ id: 123, title: 'Some movie' }, { id: 256, title: 'Some movie 2' }],
             total: 12
         };
         const action = { type: actionTypes.SEARCH_MOVIES, results };
         const expectedState = { ...initialState, moviesList: results.data, moviesFound: results.total };
         expect(movieAppReducer(initialState, action)).toEqual(expectedState);
    });
    it('should handle SEARCH_BY', () => {
        const action = { type: actionTypes.SEARCH_BY, option: filterOptions.GENRE };
        const expectedState = { ...initialState, selectedFilterOption: filterOptions.GENRE };
        expect(movieAppReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle SORT_BY', () => {
        const action = { type: actionTypes.SORT_BY, option: sortOptions.RATING };
        const expectedState = { ...initialState, selectedSortOption: sortOptions.RATING };
        expect(movieAppReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle UPDATE_INPUT_VALUE', () => {
        const input = 'test';
        const action = { type: actionTypes.UPDATE_INPUT_VALUE, value: input };
        const expectedState = { ...initialState, searchInputValue: input };
        expect(movieAppReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle SET_SELECTED_MOVIE', () => {
        const selectedMovie = { id: 123, title: 'Test' };
        const action = { type: actionTypes.SET_SELECTED_MOVIE, movie: selectedMovie };
        const expectedState = { ...initialState, selectedMovieInfo: selectedMovie };
        expect(movieAppReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle RESET_SEARCH', () => {
        const selectedMovie = { id: 123, title: 'Test' };
        const action = { type: actionTypes.RESET_SEARCH, selectedMovieInfo: selectedMovie };
        const expectedState = { ...initialState, selectedMovieInfo: {} };
        expect(movieAppReducer(initialState, action)).toEqual(expectedState);
    });
});
