import { mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SearchResults from './searchResults';
import NoResults from '../noResults/noResults';
import MovieList from '../movieList/movieList';
import { initialState } from '../../constants/constants';


const mockStore = configureStore();
const mockData = [{ id: 123, title: 'Some movie' }, { id: 256, title: 'Some movie 2' }];

let store;

describe('<SearchResults />', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should render search results block and match snapshot', () => {
    const component = mount(<Provider store={store}><SearchResults/></Provider>);
    expect(component).toMatchSnapshot();
  });

  it('should render no results block', () => {
    const component = mount(<Provider store={store}><SearchResults moviesList={[]}/></Provider>);
    expect(component.find(NoResults).length).toEqual(1);
  });

  it('should render movie list', () => {
    const component = mount(<Provider store={store}><SearchResults moviesList={mockData}/></Provider>);
    expect(component.find(MovieList).length).toEqual(1);
  });
});
