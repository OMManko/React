import React from "react";
import { hot } from "react-hot-loader";
import Button from "../shared/button";
import TextField from "../shared/input";
import RadioGroup from "../shared/radioGroup";
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
                <TextField/>
                <div className="searchForm__controls">
                    <RadioGroup title="Search by"
                        name="searchByField"
                        radios={[
                            {
                                id: "title",
                                label: "Title",
                                defaultChecked: true
                            },
                            {
                                id: "genre",
                                label: "Genre"
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

