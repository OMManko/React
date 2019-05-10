import React from "react";
import "./input.scss";
import PropTypes from "prop-types";
import { updateInputValue } from "../../../actions/actions";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";

const TextField = ({ className, inputValue, handleInputChange }) => (
    <input
        type="text"
        className={className}
        value={inputValue}
        onChange={(changeEvent) => handleInputChange(changeEvent.target.value)}
    />
);

TextField.propTypes = {
    className: PropTypes.string,
    inputValue: PropTypes.string,
    handleInputChange: PropTypes.func
};

const mapStateToProps = state => ({
    inputValue: state.searchInputValue
});

const mapDispatchToProps = {
    handleInputChange: updateInputValue
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(TextField));
