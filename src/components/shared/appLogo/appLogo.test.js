import React from 'react';
import { shallow } from 'enzyme';
import AppLogo from "../appLogo/appLogo";

let component = shallow(<AppLogo/>);

describe('<AppLogo />', () => {
    beforeEach(() => {
        component = shallow(<AppLogo/>);
    });
    it('should render logo and match snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});
