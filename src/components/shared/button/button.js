import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

const Button = (props) => (
    <button className={props.variant} onClick={() => props.handleAction()}> {props.label} </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    handleAction: PropTypes.func.isRequired
};

export default Button;
