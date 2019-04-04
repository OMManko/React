import { mount, shallow } from 'enzyme';
import React from 'react';
import MovieCard from './movieCard';
import MoviePoster from "../moviePoster/moviePoster";

let component;

describe('<MovieCard />', () => {
    beforeEach(() => {
        component = shallow(<MovieCard />);
    });

    it('should render radio group and match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should contain movie poster', () => {
        component = mount(<MovieCard />);
        expect(component.find(MoviePoster).length).toEqual(1);
    });
});
