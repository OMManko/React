import { shallow } from 'enzyme';
import React from 'react';
import Header from '../header/header';
import AppLogo from "../../shared/appLogo/appLogo";

let component;

describe('<Footer />', () => {
    beforeEach(() => {
        component = shallow(<Header/>);
    });
    it('should render header and match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should contain logo', () => {
        expect(component).toMatchSnapshot();
        expect(component.contains(<AppLogo/>)).toBe(true);
    });

    it('should call function when button is clicked', () => {
        const instance = component.instance();
        instance.handleSearchFormOpen(true);
        expect(console.log("Open search form"));
    });
});
