import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from '../header/header';
import AppLogo from '../../shared/appLogo/appLogo';
import { initialState } from '../../../constants/constants';

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
