import React from "react";
import { hot } from "react-hot-loader";
import "./noResults.scss";

class NoResults extends React.PureComponent {
    render () {
        return (
            <h2 className="noResults__title">No films found</h2>
        );
    }
}

export default hot(module)(NoResults);
