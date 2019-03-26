import React from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import Radio from "../radio/radio";
import "./radioGroup.scss";

class RadioGroup extends React.Component {
    render () {
        const { title, name } = this.props;
        return (
            <div className="formRadio__groupWrapper">
                <span className="formRadio__groupTitle">{title}</span>
                <div className="formRadio__group">
                    {this.props.radios.map((radio, i) => {
                        return (<Radio name={name}
                            key={i}
                            id={radio.id}
                            label={radio.label}
                            defaultChecked={radio.defaultChecked}/>);
                    })}
                </div>
            </div>
        );
    }
}

RadioGroup.propTypes = {
    title: PropTypes.string,
    radios: PropTypes.array,
    name: PropTypes.string
};

export default hot(module)(RadioGroup);
