import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchForm from '../searchForm/searchForm';
import TextField from '../shared/input/input';
import RadioGroup from '../shared/radioGroup/radioGroup';
import { initialState } from '../../constants/constants';

const mockStore = configureStore();

let component;
let store;

describe('<SearchForm />', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    component = mount(<Provider store={store}><SearchForm/></Provider>);
  });

  it('should render search form and match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should contain text field', () => {
    expect(component.find(TextField).length).toEqual(1);
  });

  it('should contain radio group', () => {
    expect(component.find(RadioGroup).length).toEqual(1);
  });
});
