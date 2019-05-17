import { mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import MovieInfo from '../movieInfo/movieInfo';
import { initialState } from '../../constants/constants';

const mockStore = configureStore();

let component;
let store;

const mockData = {
  poster_path: 'https://cdn.cnn.com/cnnnext/dam/assets/190315113313-04-mafia-crime-families-have-evolved-file-restricted-use-super-tease.jpg',
  title: 'Pulp Fiction',
  release_date: '1980-05-20',
  genres: ['Adventure', 'Action', 'Science Fiction'],
  runtime: 154,
  overview: 'Some descrition',
};

describe('<MovieInfo />', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    component = mount(<Provider store={store}><MovieInfo movie = {mockData} /></Provider>);
  });

  it('should render movie info and match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
