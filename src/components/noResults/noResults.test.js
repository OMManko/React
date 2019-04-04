import { shallow } from 'enzyme';
import React from 'react';
import NoResults from './noResults';

describe('<NoResults />', () => {
    it('should render no results block and match shapshot', () => {
        const component = shallow(<NoResults />);
        expect(component).toMatchSnapshot();
    });
});
