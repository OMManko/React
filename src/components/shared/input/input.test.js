import { shallow } from 'enzyme';
import React from 'react';
import TextField from './input';

describe('<TextField />', () => {
    it('should render text field and match snapshot', () => {
        const component = shallow(<TextField />);
        expect(component).toMatchSnapshot();
    });

    it('should render text field with class', () => {
        const className = 'test';
        const component = shallow(<TextField className={className}/>);
        expect(component).toMatchSnapshot();
        expect(component.props().className).toEqual(className);
    });
});
