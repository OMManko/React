// @flow

import React from 'react';
import './button.scss';

type Props = {
    label: string,
    variant: string,
    handleAction: Function,
};

const Button = (props: Props) => (
    <button className={props.variant} onClick={props.handleAction}> {props.label} </button>
);

export default Button;
