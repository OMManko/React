import { mount } from 'enzyme';
import React from 'react';
import Header from '../header/header';
import AppLogo from "../../shared/appLogo/appLogo";
import { Provider } from "react-redux";
import { initialState } from "../../../constants/constants";
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

let component;
let store;

describe('<Header />', () => {
    beforeEach(() => {
        store = mockStore(initialState);
        component = mount(<Provider store={store}><Header/></Provider>);
    });

    it('should render header and match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should contain logo', () => {
        expect(component).toMatchSnapshot();
        expect(component.contains(<AppLogo/>)).toBe(true);
    });
});
