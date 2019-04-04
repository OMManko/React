import { shallow } from 'enzyme';
import React from 'react';
import MovieList from './movieList';

describe('<MovieList />', () => {
    it('should render movie list and match snapshot', () => {
        const component = shallow(<MovieList/>);
        expect(component).toMatchSnapshot();
    });
});
