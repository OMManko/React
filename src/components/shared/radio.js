import React from "react";
import { hot } from "react-hot-loader";
import "./radio.scss";
import PropTypes from "prop-types";


class Radio extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        id: PropTypes.string,
        label: PropTypes.string,
        additionalClassName: PropTypes.string,
        defaultChecked: PropTypes.bool
    };

    constructor (props) {
        super(props);
        this.state = {};
    }

    handleRadioChange () {
        console.log(`Selected property is ${this.props.id}`);
    }

    render () {
        return (
            <div className="formRadio">
                <input
                    className="formRadio__input"
                    type="radio"
                    name={this.props.name}
                    id={this.props.id}
                    defaultChecked={this.props.defaultChecked}
                    onChange={this.handleRadioChange.bind(this)}
                />
                <label className="formRadio__label" htmlFor={this.props.id}>
                    {this.props.label}
                </label>
            </div>
        );
    }
}

export default hot(module)(Radio);
