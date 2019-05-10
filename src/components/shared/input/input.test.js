import { mount } from 'enzyme';
import React from 'react';
import TextField from './input';
import { Provider } from "react-redux";
import { initialState } from "../../../constants/constants";
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

let store;

describe('<TextField />', () => {
    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('should render text field and match snapshot', () => {
        const component = mount(<Provider store={store}><TextField/></Provider>);
        expect(component).toMatchSnapshot();
    });

    it('should render text field with class', () => {
        const className = 'test';
        const component = mount(<Provider store={store}><TextField className={className}/></Provider>);
        expect(component).toMatchSnapshot();
        expect(component.props().className).toEqual(className);
    });
});
