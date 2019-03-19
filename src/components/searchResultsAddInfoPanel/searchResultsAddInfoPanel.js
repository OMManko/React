import React from "react";
import { hot } from "react-hot-loader";
import RadioGroup from "../shared/radioGroup";
import "./searchResultsAddInfoPanel.scss";

class SearchResultsAddInfoPanel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}; // is necessary to show search results info or film by sorting; change on sort switching
    }

    render () {
        return (
            <div className="searchResultsAddInfoPanel">
                <div className="container">
                    <div className="searchResultsAddInfo">
                        <p>7 movies found</p>
                        <RadioGroup title="Sort by"
                            name="sortByField"
                            radios={[
                                {
                                    id: "releaseDate",
                                    label: "release date",
                                    defaultChecked: true
                                },
                                {
                                    id: "rating",
                                    label: "rating"
                                }
                            ]}
                        />
                    </div>
                    <div className="searchResultsAddInfo">
                        <div className="searchResultsAddInfo__displayInfo">
                            <span>Films by</span>
                            <span className="searchResultsAddInfo__displayInfoValue">Drama genre</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(SearchResultsAddInfoPanel);
