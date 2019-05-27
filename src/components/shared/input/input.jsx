// @flow

import React from 'react';
import './input.scss';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { withHandlers, compose } from 'recompose';
import { updateInputValue } from '../../../actions/actions';

type Props = {
    className: string,
    inputValue: string,
    handleInputChange: Function,
    handleEnterAction: Function
};

const enhance = compose(
  withHandlers({
    onChange: props => (event) => {
      props.handleInputChange(event.target.value);
    },
    onKeyPress: props => (event) => {
      event.key === 'Enter' && props.handleEnterAction();
    },
  }),
);

const TextField = enhance(({ onChange, onKeyPress }) => (
    <input
        type="text"
        className='formControl'
        onChange={onChange}
        onKeyPress={onKeyPress}
    />));

const mapStateToProps = state => ({
  inputValue: state.searchInputValue,
});

const mapDispatchToProps = {
  handleInputChange: updateInputValue,
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(TextField));
