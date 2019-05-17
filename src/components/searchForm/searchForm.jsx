// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { List } from "immutable";
import Button from '../shared/button/button';
import TextField from '../shared/input/input';
import RadioGroup from '../shared/radioGroup/radioGroup';
import { filterOptions } from '../../constants/constants';
import { changeSearchOption, fetchMovies, updateInputValue } from '../../actions/actions';
import './searchForm.scss';

type Props = {
    inputValue: string,
    selectedFilterOption: string,
    changeCurrentSearchOption: Function,
    searchMovies: Function,
    updateInputValue: Function,
    searchOptionsGroup: List<Object>,
    history: Object,
    location: Object,
};

class SearchForm extends React.Component<Props> {
  componentWillMount() {
    const params = new URLSearchParams(this.props.location.search);
    const searchValue = params.get('search') || null;
    const filter = params.get('searchBy') || this.props.selectedFilterOption;
    this.props.updateInputValue(searchValue);
    this.props.searchMovies(searchValue, filter);
  }

  render() {
    const {
      selectedFilterOption,
      changeCurrentSearchOption,
      searchMovies,
      inputValue,
      searchOptionsGroup = [
        {
          id: filterOptions.TITLE,
          label: 'title',
          checked: selectedFilterOption === filterOptions.TITLE,
        },
        {
          id: filterOptions.GENRE,
          label: 'genre',
          checked: selectedFilterOption === filterOptions.GENRE,
        },
      ],
    } = this.props;

    const handleSearchMovies = () => {
      this.props.history.push(`/search?search=${inputValue}&searchBy=${selectedFilterOption}`);
      searchMovies(inputValue, selectedFilterOption);
    };

    return (
            <div className="searchForm">
                <h2 className="searchForm__title">Find your movie</h2>
                <TextField className="formControl"/>
                <div className="searchForm__controls">
                    <RadioGroup title="Search by"
                        name="searchByField"
                        handleAction={changeCurrentSearchOption}
                        radios={searchOptionsGroup}
                    />
                    <Button variant="btnPrimary" label="Search" handleAction={handleSearchMovies}/>
                </div>
            </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedFilterOption: state.selectedFilterOption,
  inputValue: state.searchInputValue,
});

const mapDispatchToProps = {
  changeCurrentSearchOption: changeSearchOption,
  searchMovies: fetchMovies,
  updateInputValue,
};

export default hot(module)(withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm)));
