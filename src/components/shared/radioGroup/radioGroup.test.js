import { mount, shallow } from 'enzyme';
import React from 'react';
import RadioGroup from './radioGroup';
import { filterOptions } from '../../../constants/constants';

const radiosMock = [
  {
    id: 'title',
    label: filterOptions.TITLE,
    defaultChecked: true,
  },
  {
    id: 'genre',
    label: filterOptions.GENRE,
  },
];

describe('<RadioGroup />', () => {
  it('should render radio group and match snapshot', () => {
    const component = shallow(<RadioGroup radios={radiosMock}/>);
    expect(component).toMatchSnapshot();
  });

  it('should set title to radio group', () => {
    const title = 'test';
    const component = mount(<RadioGroup title={title} radios={radiosMock}/>);
    expect(component).toMatchSnapshot();
    expect(component.find('.formRadio__groupTitle').text()).toMatch(title);
  });

  it('should set name to radio input', () => {
    const name = 'test';
    const component = mount(<RadioGroup name={name} radios={radiosMock}/>);
    expect(component).toMatchSnapshot();
    expect(component.find('.formRadio').at(0).find('input').props().name).toEqual(name);
  });
});
