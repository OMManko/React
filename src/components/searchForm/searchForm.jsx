import React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import Button from "../shared/button/button";
import TextField from "../shared/input/input";
import RadioGroup from "../shared/radioGroup/radioGroup";
import { filterOptions } from '../../constants/constants';
import { changeSearchOption, fetchMovies, updateInputValue } from "../../actions/actions";
import "./searchForm.scss";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
    componentWillMount () {
        const params = new URLSearchParams(this.props.location.search);
        const searchValue = params.get('search') || null;
        const filter = params.get('searchBy') || this.props.selectedFilterOption;
        this.props.updateInputValue(searchValue);
        this.props.searchMovies(searchValue, filter);
    }

    render () {
        const {
            selectedFilterOption,
            changeCurrentSearchOption,
            searchMovies,
            inputValue,
            searchOptionsGroup = [
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
            ]
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
                    <Button variant="btn--primary" label="Search" handleAction={handleSearchMovies}/>
                </div>
            </div>
        );
    }
}

SearchForm.propTypes = {
    inputValue: PropTypes.string,
    selectedFilterOption: PropTypes.string,
    changeCurrentSearchOption: PropTypes.func,
    searchMovies: PropTypes.func,
    updateInputValue: PropTypes.func,
    searchOptionsGroup: PropTypes.array,
    history: PropTypes.object,
    location: PropTypes.object
};

const mapStateToProps = state => ({
    selectedFilterOption: state.selectedFilterOption,
    inputValue: state.searchInputValue
});

const mapDispatchToProps = {
    changeCurrentSearchOption: changeSearchOption,
    searchMovies: fetchMovies,
    updateInputValue
};

export default hot(module)(withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm)));


