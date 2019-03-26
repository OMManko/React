import { mount, shallow } from 'enzyme';
import React from 'react';
import App from './app';
import Header from '../layout/header/header';
import Main from '../layout/main/main';
import Footer from '../layout/footer/footer';

let component;

describe('<App />', () => {
    beforeEach(() => {
        component = mount(
            <App />
        );
    });

    afterEach(() => {
        component.unmount();
    });

    it('should render app and match snapshot', () => {
        component = shallow(<App/>);
        expect(component).toMatchSnapshot();
    });

    it('should render header', () => {
        expect(component.find(Header).length).toEqual(1);
    });

    it('should render main part', () => {
        expect(component.find(Main).length).toEqual(1);
    });

    it('should render footer', () => {
        expect(component.find(Footer).length).toEqual(1);
    });
});
