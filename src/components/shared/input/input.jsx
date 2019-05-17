import React from 'react';
import './input.scss';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { updateInputValue } from '../../../actions/actions';

const TextField = ({ className, handleInputChange }) => (
    <input
        type="text"
        className={className}
        onChange={changeEvent => handleInputChange(changeEvent.target.value)}
    />
);

TextField.propTypes = {
  className: PropTypes.string,
  inputValue: PropTypes.string,
  handleInputChange: PropTypes.func,
};

const mapStateToProps = state => ({
  inputValue: state.searchInputValue,
});

const mapDispatchToProps = {
  handleInputChange: updateInputValue,
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(TextField));
