// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import RadioGroup from '../shared/radioGroup/radioGroup';
import './searchResultsAddInfoPanel.scss';
import { sortOptions } from '../../constants/constants';
import { changeSortOption } from '../../actions/actions';
import {
  selectMoviesFound, selectMoviesList, selectFilterOption,
  selectSortOption, selectSearchInputValue, selectMovieInfo,
} from '../../selectors/selectors';
import { createStructuredSelector } from 'reselect';

type Props = {
    total: number,
    selectedSortOption: string,
    selectedFilterOption: string,
    searchInputValue: string,
    selectedMovieInfo: Object,
    moviesList: Array,
    changeCurrentSortOption: Function,
};

class SearchResultsAddInfoPanel extends React.Component<Props> {
  render() {
    const {
      total,
      changeCurrentSortOption,
      selectedFilterOption,
      selectedSortOption,
      searchInputValue,
      moviesList,
      selectedMovieInfo,
    } = this.props;

    const sortOptionsGroup = [
      {
        id: sortOptions.RELEASE,
        label: 'release date',
        checked: selectedSortOption === sortOptions.RELEASE,
      },
      {
        id: sortOptions.RATING,
        label: 'rating',
        checked: selectedSortOption === sortOptions.RATING,
      },
    ];


    return (
            <div className="searchResultsAddInfoPanel">
                <div className="container">
                    {(moviesList.size > 0 && selectedMovieInfo.size === 0)
                        && (
                            <div className="searchResultsAddInfo">
                                <p>{total} movies found</p>
                                <RadioGroup title="Sort by"
                                    name="sortByField"
                                    handleAction={changeCurrentSortOption}
                                    radios={sortOptionsGroup}
                                />
                            </div>
                        )}

                    {selectedMovieInfo.size > 0
                        && <div className="searchResultsAddInfo">
                            <div className="searchResultsAddInfo__displayInfo">
                                <span>Films by</span>
                                <span className="searchResultsAddInfo__displayInfoValue">{searchInputValue} {selectedFilterOption}</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  total: selectMoviesFound,
  moviesList: selectMoviesList,
  selectedSortOption: selectSortOption,
  selectedFilterOption: selectFilterOption,
  searchInputValue: selectSearchInputValue,
  selectedMovieInfo: selectMovieInfo,
});

const mapDispatchToProps = {
  changeCurrentSortOption: changeSortOption,
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(SearchResultsAddInfoPanel));
