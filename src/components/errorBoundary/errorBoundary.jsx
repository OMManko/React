import React from 'react';
import PropTypes from 'prop-types';
import './errorBoundary.scss';

class ErrorBoundary extends React.Component {
    static propTypes = {
      children: PropTypes.object,
    };

    constructor(props) {
      super(props);
      this.state = { errorInfo: null };
    }

    componentDidCatch(errorInfo) {
      this.setState({
        errorInfo,
      });
    }

    render() {
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
