import { shallow } from 'enzyme';
import React from 'react';
import MovieInfo from "../movieInfo/movieInfo";
import MoviePoster from "../moviePoster/moviePoster";

const movieInfoMock = {
    src: "https://cdn.cnn.com/cnnnext/dam/assets/190315113313-04-mafia-crime-families-have-evolved-file-restricted-use-super-tease.jpg",
    title: "Pulp Fiction",
    year: 1992,
    genre: "Oscar-winning Movies",
    duration: "154 min",
    description: "Some descrition"
};

const component = shallow(<MovieInfo movie = {movieInfoMock}/>);


describe('<MovieInfo />', () => {
    it('should render movie info and match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should contain movie poster', () => {
        expect(component.find(MoviePoster).length).toEqual(1);
    });
});
