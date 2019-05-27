// @flow

import React from 'react';
import { defaultProps, withHandlers, compose } from 'recompose';
import './button.scss';

const enhance = compose(
  defaultProps({ variant: 'btnPrimary' }),
  withHandlers({
    onClick: props => () => {
      props.handleAction();
    },
  }),
);

const Button = enhance(({ label, variant, onClick }) => (
    <button
        className={variant}
        onClick={onClick}>
        {label}
    </button>
));

export default Button;
