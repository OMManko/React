// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import './moviePoster.scss';
import { moviePosterSizes } from '../../constants/constants';
import defaultImage from '../../static/download.jpg';

type Props = {
    src: string,
    size: string
};

const MoviePoster = (props: Props) => (
    <div className={`moviePoster__imgWrapper  ${props.size}`}>
        <img className="moviePoster__img" src={props.src}/>
    </div>
);

MoviePoster.defaultProps = {
  src: defaultImage,
  size: moviePosterSizes.SMALL,
};

export default hot(module)(MoviePoster);
