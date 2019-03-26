import React from "react";
import "./input.scss";
import PropTypes from "prop-types";

const TextField = ({ className }) => (
    <input type="text" className={className}/>
);

TextField.propTypes = {
    className: PropTypes.string
};

export default TextField;
