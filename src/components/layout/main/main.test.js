import { mount } from 'enzyme';
import React from 'react';
import Main from './main';
import SearchResults from "../../searchResults/searchResults";
import SearchResultsAddInfoPanel from "../../searchResultsAddInfoPanel/searchResultsAddInfoPanel";
import InfoPanel from "../../infoPanel/infoPanel";
import { Provider } from "react-redux";
import { initialState } from "../../../constants/constants";
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

let component;
let store;


describe('<Main />', () => {
    beforeEach(() => {
        store = mockStore(initialState);
        component = mount(<Provider store={store}><Main/></Provider>);
    });

    afterEach(() => {
        component.unmount();
    });

    it('should render main part and match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render search results block', () => {
        expect(component.find(SearchResults).length).toEqual(1);
    });

    it('should render results block additional info panel', () => {
        expect(component.find(SearchResultsAddInfoPanel).length).toEqual(1);
    });

    it('should render info panel', () => {
        expect(component.find(InfoPanel).length).toEqual(1);
    });
});
