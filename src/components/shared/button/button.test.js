import { shallow } from 'enzyme';
import React from 'react';
import Button from './button';

describe('<Button />', () => {
    it('should render button and match snapshot', () => {
        const component = shallow(<Button />);
        expect(component).toMatchSnapshot();
    });

    it('should render button with class', () => {
        const variant = 'test';
        const component = shallow(<Button variant={variant}/>);
        expect(component).toMatchSnapshot();
        expect(component.props().className).toEqual(variant);
    });

    it('should render button with label', () => {
        const label = 'test';
        const component = shallow(<Button label={label}/>);
        expect(component).toMatchSnapshot();
        expect(component.find('button').text()).toMatch(label);
    });

    it('should call function when button is clicked', () => {
        const mockFn = jest.fn();
        const component = shallow(<Button handleAction={mockFn} />);
        component.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
});
