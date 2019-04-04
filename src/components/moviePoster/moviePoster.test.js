import { shallow } from 'enzyme';
import React from 'react';
import MoviePoster from './moviePoster';
import { moviePosterSizes } from "../../constants/constants";

describe('<MoviePoster />', () => {
    it('should render movie poster and match snapshot', () => {
        const component = shallow(<MoviePoster />);
        expect(component).toMatchSnapshot();
    });

    it('should set src to movie poster image', () => {
        const source = 'https://i.ytimg.com/vi/Uv50q2PudQw/maxresdefault.jpg';
        const component = shallow(<MoviePoster src={source}/>);
        expect(component).toMatchSnapshot();
        expect(component.find('img').props().src).toEqual(source);
    });

    it('should set size to movie poster', () => {
        const size = moviePosterSizes.MEDIUM;
        const component = shallow(<MoviePoster size={size}/>);
        expect(component).toMatchSnapshot();
        expect(component.props().className).toContain(size);
    });
});
