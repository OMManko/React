import { mount, shallow } from 'enzyme';
import React from 'react';
import MovieCard from './movieCard';
import MoviePoster from "../moviePoster/moviePoster";

let component;

describe('<MovieCard />', () => {
    it('should render radio group and match snapshot', () => {
        component = shallow(<MovieCard />);
        expect(component).toMatchSnapshot();
    });

    it('should contain movie poster', () => {
        component = mount(<MovieCard />);
        expect(component.find(MoviePoster).length).toEqual(1);
    });
});
