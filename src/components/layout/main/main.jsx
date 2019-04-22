import React from "react";
import { hot } from "react-hot-loader";
import "./main.scss";
import SearchResults from "../../searchResults/searchResults";
import SearchResultsAddInfoPanel from "../../searchResultsAddInfoPanel/searchResultsAddInfoPanel";
import { Switch, Route } from 'react-router-dom';
import NoResults from "../../noResults/noResults";
import NotFound from "../../notFound/notFound";
import SearchForm from "../../searchForm/searchForm";
import MovieInfo from "../../movieInfo/movieInfo";
import InfoPanel from "../../infoPanel/infoPanel";

const Main = () => (
    <main className="siteContent">
        <Switch>
            <Route exact path="/">
                <InfoPanel>
                    <SearchForm/>
                </InfoPanel>
                <SearchResultsAddInfoPanel/>
                <NoResults/>
            </Route>
            <Route exact path="/search">
                <InfoPanel>
                    <SearchForm/>
                </InfoPanel>
                <SearchResultsAddInfoPanel/>
                <SearchResults/>
            </Route>
            <Route path="/film/:id">
                <InfoPanel>
                    <MovieInfo/>
                </InfoPanel>
                <SearchResultsAddInfoPanel/>
                <SearchResults/>
            </Route>
            <Route path="*">
                <InfoPanel>
                    <SearchForm/>
                </InfoPanel>
                <SearchResultsAddInfoPanel/>
                <NotFound/>
            </Route>
        </Switch>
    </main>
);

export default hot(module)(Main);
