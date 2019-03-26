import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

const Button = ({ variant, handleAction, label }) => (
    <button className={variant} onClick={handleAction}> {label} </button>
);

Button.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.string,
    handleAction: PropTypes.func
};

export default Button;
