// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import './header.scss';
import { connect } from 'react-redux';
import { withProps } from 'recompose';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Button from '../../shared/button/button';
import AppLogo from '../../shared/appLogo/appLogo';
import { resetSearch } from '../../../actions/actions';
import { selectMovieInfo } from '../../../selectors/selectors';

type Props = {
    resetSearch: Function,
    selectedMovieInfo: Object,
    button: Object
};

const HeaderWithoutButton = (props: Props) => (
    <header className="header">
        <div className="container">
            <div className="header__info">
                <AppLogo/>
                {
                    props.button ? (
                        <Link to={'/'}>
                            <Button variant="btnSecondary" label="Search" handleAction={props.resetSearch}/>
                        </Link>) : null
                }
            </div>
        </div>
    </header>
);

const HeaderWithButton = withProps({ button: true })(HeaderWithoutButton);

const Header = (props: Props) => (
  props.selectedMovieInfo.size > 0
    ? <HeaderWithButton {...props} /> : <HeaderWithoutButton {...props} />
);

const mapStateToProps = createStructuredSelector({
  selectedMovieInfo: selectMovieInfo,
});

const mapDispatchToProps = {
  resetSearch,
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(Header));
