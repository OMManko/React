// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import './header.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../shared/button/button';
import AppLogo from '../../shared/appLogo/appLogo';
import { resetSearch } from '../../../actions/actions';

type Props = {
    resetSearch: Function,
    selectedMovieInfo: Object
};

class Header extends React.Component<Props> {
  render() {
    const {
      selectedMovieInfo,
    } = this.props;

    return (
            <header className="header">
                <div className="container">
                    <div className="header__info">
                        <AppLogo/>
                        {Object.keys(selectedMovieInfo).length > 0
                            && <Link to={'/'}>
                                <Button variant="btnSecondary" label="Search" handleAction={resetSearch}/>
                            </Link>
                        }
                    </div>
                </div>
            </header>
    );
  }
}

const mapStateToProps = state => ({
  selectedMovieInfo: state.selectedMovieInfo,
});

const mapDispatchToProps = {
  resetSearch,
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(Header));
