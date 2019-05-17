import React from 'react';
import { hot } from 'react-hot-loader';
import './noResults.scss';

const NoResults = () => (
    <div className="container">
        <h2 className="noResults__title">No films found</h2>
    </div>
);

export default hot(module)(NoResults);
