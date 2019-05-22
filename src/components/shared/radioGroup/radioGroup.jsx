// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import { List } from 'immutable';
import Radio from '../radio/radio';
import './radioGroup.scss';

type Props = {
    title: string,
    radios: List<Object>,
    handleAction: Function,
    name: string,
};

const RadioGroup = (props: Props) => (
        <div className="formRadio__groupWrapper">
            <span className="formRadio__groupTitle">{props.title}</span>
            <div className="formRadio__group">
                {props.radios.map((radio, i) => (<Radio name={props.name}
                        key={i}
                        id={radio.id}
                        label={radio.label}
                        checked={radio.checked}
                        handleAction={props.handleAction}/>))}
            </div>
        </div>
);

export default hot(module)(RadioGroup);
