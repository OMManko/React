import React from "react";
import { hot } from "react-hot-loader";
import "./main.scss";
import SearchResults from "../../searchResults/searchResults";
import SearchResultsAddInfoPanel from "../../searchResultsAddInfoPanel/searchResultsAddInfoPanel";
import InfoPanel from "../../infoPanel/infoPanel";


const Main = () => (
    <main className="siteContent">
        <InfoPanel/>
        <SearchResultsAddInfoPanel/>
        <SearchResults/>
    </main>
);

export default hot(module)(Main);
