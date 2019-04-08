import { mount } from 'enzyme';
import React from 'react';
import InfoPanel from '../infoPanel/infoPanel';
import MovieInfo from "../movieInfo/movieInfo";
import SearchForm from "../searchForm/searchForm";
import { Provider } from "react-redux";
import { initialState } from "../../constants/constants";
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const mockData = {
    poster_path: "https://cdn.cnn.com/cnnnext/dam/assets/190315113313-04-mafia-crime-families-have-evolved-file-restricted-use-super-tease.jpg",
    title: "Pulp Fiction",
    release_date: "1980-05-20",
    genres: ["Adventure", "Action", "Science Fiction"],
    runtime: 154,
    overview: "Some descrition"
};

let store;

describe('<InfoPanel />', () => {
    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('should render info panel and match snapshot', () => {
        const component = mount(<Provider store={store}><InfoPanel/></Provider>);
        expect(component).toMatchSnapshot();
    });

    it('should contain movie info', () => {
        const component = mount(<Provider store={store}><InfoPanel selectedMovieInfo={mockData}/></Provider>);
        expect(component).toMatchSnapshot();
        expect(component.contains(<MovieInfo movie = {mockData}/>)).toBe(true);
    });

    it('should contain search form', () => {
        const component = mount(<Provider store={store}><InfoPanel selectedMovieInfo={{}}/></Provider>);
        expect(component).toMatchSnapshot();
        expect(component.contains(<SearchForm/>)).toBe(true);
    });
});
