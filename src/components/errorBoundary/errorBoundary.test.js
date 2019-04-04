import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import Header from "../layout/header/header";


describe('<ErrorBoundary />', () => {
    it('should render error boundary and match snapshot', () => {
        const component = shallow(<ErrorBoundary/>);
        expect(component).toMatchSnapshot();
    });

    it('should display error message if app throws an error', () => {
        const component = shallow(<ErrorBoundary>
            <Header/>
        </ErrorBoundary>);

        const error = new Error('test');

        component.find(Header).simulateError(error);
        expect(component.containsMatchingElement(<h2>Oops. Something went wrong.</h2>)).toEqual(true);
    });
});
