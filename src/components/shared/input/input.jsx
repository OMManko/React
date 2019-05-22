// @flow

import React from 'react';
import './input.scss';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { updateInputValue } from '../../../actions/actions';

type Props = {
    className: string,
    inputValue: string,
    handleInputChange: Function,
    handleEnterAction: Function
};

const TextField = (props: Props) => (
    <input
        type="text"
        className={props.className}
        onChange={changeEvent => props.handleInputChange(changeEvent.target.value)}
        onKeyPress={event => event.key === 'Enter' && props.handleEnterAction()}
    />
);

TextField.propTypes = {

};

const mapStateToProps = state => ({
  inputValue: state.searchInputValue,
});

const mapDispatchToProps = {
  handleInputChange: updateInputValue,
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(TextField));
