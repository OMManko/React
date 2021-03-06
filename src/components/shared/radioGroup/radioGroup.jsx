import React from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import Radio from "../radio/radio";
import "./radioGroup.scss";

const RadioGroup = ({ radios, title, name, handleAction }) => {
    return (
        <div className="formRadio__groupWrapper">
            <span className="formRadio__groupTitle">{title}</span>
            <div className="formRadio__group">
                {radios.map((radio, i) => {
                    return (<Radio name={name}
                        key={i}
                        id={radio.id}
                        label={radio.label}
                        checked={radio.checked}
                        handleAction={handleAction}/>);
                })}
            </div>
        </div>
    );
};

RadioGroup.propTypes = {
    title: PropTypes.string,
    radios: PropTypes.array,
    handleAction: PropTypes.func,
    name: PropTypes.string
};

export default hot(module)(RadioGroup);
