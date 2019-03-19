import React from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import Radio from "./radio";
import "./radioGroup.scss";

class RadioGroup extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        radios: PropTypes.array,
        name: PropTypes.string
    };

    render () {
        return (
            <div className="formRadio__groupWrapper">
                <span className="formRadio__groupTitle">{this.props.title}</span>
                <div className="formRadio__group">
                    {this.props.radios.map((radio, i) => {
                        return (<Radio name={this.props.name}
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

export default hot(module)(RadioGroup);
