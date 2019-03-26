import { shallow } from 'enzyme';
import React from 'react';
import SearchForm from '../searchForm/searchForm';
import TextField from "../shared/input/input";
import RadioGroup from "../shared/radioGroup/radioGroup";

const component = shallow(<SearchForm/>);

describe('<SearchForm />', () => {
    it('should render search form and match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should contain text field', () => {
        expect(component.find(TextField).length).toEqual(1);
    });

    it('should contain radio group', () => {
        expect(component.find(RadioGroup).length).toEqual(1);
    });

    it('should call function when button is clicked', () => {
        const instance = component.instance();
        instance.handleSearchClick(true);
        expect(console.log("Start search"));
    });
});
