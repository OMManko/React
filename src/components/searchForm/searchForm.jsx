import React from "react";
import { hot } from "react-hot-loader";
import Button from "../shared/button/button";
import TextField from "../shared/input/input";
import RadioGroup from "../shared/radioGroup/radioGroup";
import { filterOptions } from '../../constants/constants';
import "./searchForm.scss";


class SearchForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    handleSearchClick () {
        console.log("Start search");
    }

    render () {
        return (
            <div className="searchForm">
                <h2 className="searchForm__title">Find your movie</h2>
                <TextField className="formControl"/>
                <div className="searchForm__controls">
                    <RadioGroup title="Search by"
                        name="searchByField"
                        radios={[
                            {
                                id: "title",
                                label: filterOptions.TITLE,
                                defaultChecked: true
                            },
                            {
                                id: "genre",
                                label: filterOptions.GENRE
                            }
                        ]}
                    />
                    <Button variant="btn--primary" label="Search" handleAction={this.handleSearchClick}/>
                </div>
            </div>
        );
    }
}

export default hot(module)(SearchForm);

