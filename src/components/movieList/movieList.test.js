import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MovieList from './movieList';
import { initialState } from '../../constants/constants';

const mockStore = configureStore();

let component;
let store;

describe('<MovieList />', () => {
  it('should render movie list and match snapshot', () => {
    store = mockStore(initialState);
    component = mount(<Provider store={store}><MovieList/></Provider>);
    expect(component).toMatchSnapshot();
  });
});
