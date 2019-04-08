import React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import Button from "../shared/button/button";
import TextField from "../shared/input/input";
import RadioGroup from "../shared/radioGroup/radioGroup";
import { filterOptions } from '../../constants/constants';
import { changeSearchOption, fetchMovies } from "../../actions/actions";
import "./searchForm.scss";
import PropTypes from "prop-types";


class SearchForm extends React.Component {
    render () {
        const {
            selectedFilterOption,
            changeCurrentSearchOption,
            searchMovies,
            inputValue
        } = this.props;

        const searchOptionsGroup = [
            {
                id: filterOptions.TITLE,
                label: "title",
                checked: selectedFilterOption === filterOptions.TITLE
            },
            {
                id: filterOptions.GENRE,
                label: "genre",
                checked: selectedFilterOption === filterOptions.GENRE
            }
        ];

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
                    <Button variant="btn--primary" label="Search" handleAction={() => searchMovies(inputValue, selectedFilterOption)}/>
                </div>
            </div>
        );
    }
}

SearchForm.propTypes = {
    inputValue: PropTypes.string,
    selectedFilterOption: PropTypes.string,
    changeCurrentSearchOption: PropTypes.func,
    searchMovies: PropTypes.func
};

const mapStateToProps = state => ({
    selectedFilterOption: state.selectedFilterOption,
    inputValue: state.searchInputValue
});

const mapDispatchToProps = {
    changeCurrentSearchOption: changeSearchOption,
    searchMovies: fetchMovies
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(SearchForm));

