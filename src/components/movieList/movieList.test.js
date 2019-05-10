import { mount } from 'enzyme';
import React from 'react';
import MovieList from './movieList';
import { Provider } from "react-redux";
import { initialState } from "../../constants/constants";
import configureStore from 'redux-mock-store';

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
