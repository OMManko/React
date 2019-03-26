import { mount, shallow } from 'enzyme';
import React from 'react';
import SearchResults from './searchResults';
import NoResults from '../noResults/noResults';
import MovieList from '../movieList/movieList';

let component;

describe('<SearchResults />', () => {
    beforeEach(() => {
        component = mount(
            <SearchResults />
        );
    });

    afterEach(() => {
        component.unmount();
    });

    it('should render search results block and match snapshot', () => {
        component = shallow(<SearchResults/>);
        expect(component).toMatchSnapshot();
    });

    it('should render no results block', () => {
        expect(component.find(NoResults).length).toEqual(1);
    });

    it('should render movie list', () => {
        expect(component.find(MovieList).length).toEqual(1);
    });
});
