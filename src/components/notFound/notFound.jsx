import React from 'react';
import { hot } from 'react-hot-loader';
import './notFound.scss';

const NotFound = () => (
    <div className="container">
        <h2 className="notFound__title">Page not found</h2>
    </div>
);

export default hot(module)(NotFound);
