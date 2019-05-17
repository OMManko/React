import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MovieCard from './movieCard';
import MoviePoster from '../moviePoster/moviePoster';
import { initialState } from '../../constants/constants';

const mockStore = configureStore();

let component;
let store;

describe('<MovieCard />', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    component = mount(<Provider store={store}><MovieCard/></Provider>);
  });

  it('should render radio group and match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should contain movie poster', () => {
    expect(component.find(MoviePoster).length).toEqual(1);
  });
});
