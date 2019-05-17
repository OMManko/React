import React from 'react';
import configureStore from 'redux-mock-store';
import { fetchMock } from 'fetch-mock';
import thunk from 'redux-thunk';
import {
  endPoint, initialState, actionTypes, sortOptions, filterOptions,
} from '../constants/constants';
import * as actions from './actions';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

const mockData = {
  data: [{ id: 123, title: 'Some movie' }, { id: 256, title: 'Some movie 2' }],
  total: 12,
};

const mockMovie = { id: 123, title: 'Test' };

describe('actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should show movie list result', () => {
    const expectedAction = {
      type: actionTypes.SEARCH_MOVIES,
      results: mockData,
    };
    expect(actions.setResults(mockData)).toEqual(expectedAction);
  });

  it('should change search option', () => {
    const expectedAction = {
      type: actionTypes.SEARCH_BY,
      option: filterOptions.TITLE,
    };
    expect(actions.changeSearchOption(filterOptions.TITLE)).toEqual(expectedAction);
  });

  it('should change sort option', () => {
    const expectedAction = {
      type: actionTypes.SORT_BY,
      option: sortOptions.RELEASE,
    };
    expect(actions.changeSortOption(sortOptions.RELEASE)).toEqual(expectedAction);
  });

  it('should get selected movie info', () => {
    const expectedAction = {
      type: actionTypes.SET_SELECTED_MOVIE,
      movie: mockMovie,
    };
    expect(actions.setSelectedMovie(mockMovie)).toEqual(expectedAction);
  });

  it('should reset selected movie info', () => {
    const expectedAction = {
      type: actionTypes.RESET_SEARCH,
    };
    expect(actions.resetSelectedMovie()).toEqual(expectedAction);
  });

  it('should update input value', () => {
    const expectedAction = {
      type: actionTypes.UPDATE_INPUT_VALUE,
      value: 'test',
    };
    expect(actions.updateInputValue('test')).toEqual(expectedAction);
  });

  it('should return movie list on movies fetch response success', () => {
    const searchParams = {
      searchInputValue: 'Titanic',
      selectedFilterOption: filterOptions.TITLE,
    };

    fetchMock.get(`${endPoint}?searchBy=${searchParams.selectedFilterOption}&search=${searchParams.searchInputValue}`, mockData);

    const expectedAction = {
      type: actionTypes.SEARCH_MOVIES,
      results: mockData,
    };

    return (
      store.dispatch(actions.fetchMovies(searchParams.searchInputValue, searchParams.selectedFilterOption))
        .then(() => {
          expect(store.getActions()).toEqual([expectedAction]);
        })
    );
  });

  it('should throw an error on movies fetch response failure', () => {
    const searchParams = {
      searchInputValue: 'Drama',
      selectedFilterOption: filterOptions.GENRE,
    };

    fetchMock.get(`${endPoint}?searchBy=${searchParams.selectedFilterOption}&search=${searchParams.searchInputValue}`, () => {
      throw new Error('Error message');
    });

    return (
      store.dispatch(actions.fetchMovies(searchParams.searchInputValue, searchParams.selectedFilterOption))
        .catch((e) => {
          throw new Error('Error message');
        })
    );
  });

  it('should return movie info on movie fetch response success', () => {
    const searchParams = {
      id: 123,
    };

    fetchMock.get(`${endPoint}/${searchParams.id}`, mockMovie);


    const expectedAction = {
      type: actionTypes.SET_SELECTED_MOVIE,
      movie: mockMovie,
    };

    return (
      store.dispatch(actions.fetchMovie(searchParams.id))
        .then(() => {
          expect(store.getActions()).toEqual([expectedAction]);
        })
    );
  });

  it('should throw an error on movie fetch response failure', () => {
    const searchParams = {
      id: 123,
    };

    fetchMock.get(`${endPoint}/${searchParams.id}`, () => {
      throw new Error('Error message');
    });

    return (
      store.dispatch(actions.fetchMovie(searchParams.id))
        .catch((e) => {
          throw new Error('Error message');
        })
    );
  });
});
