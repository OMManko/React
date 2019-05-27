// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import './radio.scss';
import PropTypes from 'prop-types';

type Props = {
    name: string,
    id: string,
    label: string,
    additionalClassName: string,
    checked: Boolean,
    handleAction: Function,
};

class Radio extends React.Component<Props> {
  render() {
    const {
      name, id, checked, label, handleAction,
    } = this.props;

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

export default hot(module)(Radio);
