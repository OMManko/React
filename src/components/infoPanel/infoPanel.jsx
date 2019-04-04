import React from "react";
import { hot } from "react-hot-loader";
import "./infoPanel.scss";
import SearchForm from "../searchForm/searchForm";
import MovieInfo from "../movieInfo/movieInfo";

const movieMock = {
    src: "https://cdn.cnn.com/cnnnext/dam/assets/190315113313-04-mafia-crime-families-have-evolved-file-restricted-use-super-tease.jpg",
    title: "Pulp Fiction",
    year: 1992,
    genre: "Oscar-winning Movies",
    duration: "154 min",
    description: "Some descrition"
};

class InfoPanel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}; // is necessary to switch between search form and movie info
    }

    render () {
        return (
            <div className="infoPanel">
                <div className="container">
                    <MovieInfo movie={movieMock}/>
                    <SearchForm/>
                </div>
            </div>
        );
    }
}

export default hot(module)(InfoPanel);
