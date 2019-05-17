import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import App from './components/app/app.jsx';

const Root = ({
  Router, location, context, store,
}) => (
    <Provider store={store}>
        <Router location={location} context={context}>
            <App/>
        </Router>
    </Provider>
);

Root.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

Root.defaultProps = {
  location: null,
  context: null,
};

export default hot(module)(Root);
