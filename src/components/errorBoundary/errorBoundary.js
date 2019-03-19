import React from "react";
import PropTypes from "prop-types";
import "./errorBoundary.scss";

class ErrorBoundary extends React.Component {
    static propTypes = {
        children: PropTypes.object
    };

    constructor (props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch (error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render () {
        if (this.state.errorInfo) {
            return (
                <div className="errorContainer">
                    <h2>Oops. Something went wrong.</h2>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
