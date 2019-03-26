import React from "react";
import { hot } from "react-hot-loader";
import "./radio.scss";
import PropTypes from "prop-types";

class Radio extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    handleRadioChange = () => {
        console.log(`Selected property is ${this.props.id}`);
    };

    render () {
        const { name, id, defaultChecked, label } = this.props;
        return (
            <div className="formRadio">
                <input
                    className="formRadio__input"
                    type="radio"
                    name={name}
                    id={id}
                    defaultChecked={defaultChecked}
                    onChange={this.handleRadioChange}
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
    defaultChecked: PropTypes.bool
};

export default hot(module)(Radio);
