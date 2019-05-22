// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import './header.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Button from '../../shared/button/button';
import AppLogo from '../../shared/appLogo/appLogo';
import { resetSearch } from '../../../actions/actions';
import { selectMovieInfo, selectMoviesList, selectSortOption } from '../../../selectors/selectors';

type Props = {
    resetSearch: Function,
    selectedMovieInfo: Object
};

class Header extends React.Component<Props> {
  render() {
    const {
      selectedMovieInfo,
      resetSearch,
    } = this.props;

    return (
            <header className="header">
                <div className="container">
                    <div className="header__info">
                        <AppLogo/>
                        { selectedMovieInfo.size > 0
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

const mapStateToProps = createStructuredSelector({
  selectedMovieInfo: selectMovieInfo,
});

const mapDispatchToProps = {
  resetSearch,
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(Header));
