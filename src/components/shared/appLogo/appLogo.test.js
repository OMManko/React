import React from 'react';
import { shallow } from 'enzyme';
import AppLogo from "../appLogo/appLogo";

const component = shallow(<AppLogo/>);

describe('<AppLogo />', () => {
    it('should render logo and match snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});
