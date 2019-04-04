import { mount } from 'enzyme';
import React from 'react';
import InfoPanel from '../infoPanel/infoPanel';
import MovieInfo from "../movieInfo/movieInfo";
import SearchForm from "../searchForm/searchForm";

let component;

const movieInfoMock = {
    src: "https://cdn.cnn.com/cnnnext/dam/assets/190315113313-04-mafia-crime-families-have-evolved-file-restricted-use-super-tease.jpg",
    title: "Pulp Fiction",
    year: 1992,
    genre: "Oscar-winning Movies",
    duration: "154 min",
    description: "Some descrition"
};

describe('<InfoPanel />', () => {
    beforeEach(() => {
        component = mount(
            <InfoPanel />
        );
    });

    afterEach(() => {
        component.unmount();
    });

    it('should render info panel and match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should contain movie info', () => {
        expect(component).toMatchSnapshot();
        expect(component.contains(<MovieInfo movie={movieInfoMock}/>)).toBe(true);
    });

    it('should contain search form', () => {
        expect(component).toMatchSnapshot();
        expect(component.contains(<SearchForm/>)).toBe(true);
    });
});
