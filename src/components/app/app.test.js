import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';
import Header from '../layout/header/header';
import Main from '../layout/main/main';
import Footer from '../layout/footer/footer';
import { initialState } from '../../constants/constants';

const mockStore = configureStore();

let component;
let store;


describe('<App />', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    component = mount(<Provider store={store}><App/></Provider>);
  });

  afterEach(() => {
    component.unmount();
  });

  it('should render app and match snapshot', () => {
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
