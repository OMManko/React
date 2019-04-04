import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../footer/footer';
import AppLogo from '../../shared/appLogo/appLogo';

let component;

describe('<Footer />', () => {
    beforeEach(() => {
        component = shallow(<Footer/>);
    });
    it('should render footer and match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should contain logo', () => {
        expect(component).toMatchSnapshot();
        expect(component.contains(<AppLogo/>)).toBe(true);
    });
});
