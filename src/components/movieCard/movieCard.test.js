import { mount } from 'enzyme';
import React from 'react';
import MovieCard from './movieCard';
import MoviePoster from "../moviePoster/moviePoster";
import { Provider } from "react-redux";
import { initialState } from "../../constants/constants";
import configureStore from 'redux-mock-store';

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
