import React from "react";
import { hot } from "react-hot-loader";
import "./infoPanel.scss";
import SearchForm from "../searchForm/searchForm";
import MovieInfo from "../movieInfo/movieInfo";


class InfoPanel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}; // is necessary to switch between search form and movie info
    }

    render () {
        return (
            <div className="infoPanel">
                <div className="container">
                    <MovieInfo
                        src="https://cdn.cnn.com/cnnnext/dam/assets/190315113313-04-mafia-crime-families-have-evolved-file-restricted-use-super-tease.jpg"
                        title="Pulp Fiction"
                        year={1992}
                        genre="Oscar-winning Movies"
                        duration="154 min"
                        description="There are many variations of passages of Lorem Ipn some form, by injected humour,
                        or randomised words which don't look even slightly believable.
                        you need to be sure there isn't anything embarrassing hidden in
                        on the Internet tend to repeat predefined chunks as necessary,
                        It uses a dictionary of over 200 Latin words, combined with a
                        to generate Lorem Ipsum which looks reasonable. The generated
                        from repetition, injected humour, or non-characteristic words etc."/>
                    <SearchForm/>
                </div>
            </div>
        );
    }
}

export default hot(module)(InfoPanel);
