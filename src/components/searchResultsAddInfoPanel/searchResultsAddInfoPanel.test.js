import { shallow } from 'enzyme';
import React from 'react';
import SearchResultsAddInfoPanel from './searchResultsAddInfoPanel';

describe('<SearchResultsAddInfoPanel />', () => {
    it('should render search results additional info panel and match snapshot', () => {
        const component = shallow(<SearchResultsAddInfoPanel/>);
        expect(component).toMatchSnapshot();
    });
});
