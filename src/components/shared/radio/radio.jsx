import React from "react";
import { hot } from "react-hot-loader";
import "./radio.scss";
import PropTypes from "prop-types";

class Radio extends React.Component {
    render () {
        const { name, id, checked, label, handleAction } = this.props;

        const handleOptionChange = (changeEvent) => {
            handleAction(changeEvent.target.id);
        };

        return (
            <div className="formRadio">
                <input
                    className="formRadio__input"
                    type="radio"
                    name={name}
                    id={id}
                    checked ={checked}
                    onChange={handleOptionChange}
                />
                <label className="formRadio__label" htmlFor={id}>
                    {label}
                </label>
            </div>
        );
    }
}

Radio.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    additionalClassName: PropTypes.string,
    checked: PropTypes.bool,
    handleAction: PropTypes.func
};

export default hot(module)(Radio);
