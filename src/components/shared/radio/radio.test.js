import { shallow } from 'enzyme';
import React from 'react';
import Radio from './radio';

describe('<Radio />', () => {
    it('should render radio and match snapshot', () => {
        const component = shallow(<Radio />);
        expect(component).toMatchSnapshot();
    });

    it('should set id to radio', () => {
        const id = 'test';
        const component = shallow(<Radio id={id}/>);
        expect(component).toMatchSnapshot();
        expect(component.find('input').props().id).toEqual(id);
    });

    it('should set name to radio', () => {
        const name = 'test';
        const component = shallow(<Radio name={name}/>);
        expect(component).toMatchSnapshot();
        expect(component.find('input').props().name).toEqual(name);
    });

    it('should set label to radio label', () => {
        const label = 'test';
        const component = shallow(<Radio label={label}/>);
        expect(component).toMatchSnapshot();
        expect(component.find('label').text()).toMatch(label);
    });

    it('should set checked property if true is passed', () => {
        const defaultChecked = true;
        const component = shallow(<Radio defaultChecked={defaultChecked}/>);
        expect(component).toMatchSnapshot();
        expect(component.find('input').props().defaultChecked).toEqual(defaultChecked);
    });


    it('should log to console radio id on change event', () => {
        const id = 'test';
        const component = shallow(<Radio id={id} />);
        component.find('input').simulate('change');
        expect(console.log(`Selected property is ${component.find('input').props().id}`));
    });
});
