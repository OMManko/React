import React from "react";
import { hot } from "react-hot-loader";
import "./searchResults.scss";
import MovieList from "../movieList/movieList";


class SearchResults extends React.PureComponent {
    constructor (props) {
        super(props);
        this.state = {}; // is necessary to show result/no result part
    }

    render () {
        return (
            <div className="searchResults__wrapper">
                <div className="container">
                    <div className="searchResults">
                        <h2 className="searchResults__title">No films found</h2>
                    </div>
                    <div className="searchResults">
                        <MovieList
                            movies = {[
                                {
                                    src: "https://cdn.cnn.com/cnnnext/dam/assets/190315113313-04-mafia-crime-families-have-evolved-file-restricted-use-super-tease.jpg",
                                    title: "Terminator",
                                    year: 1992,
                                    genre: "Drama"
                                },
                                {
                                    src: "https://www.ncaa.com/sites/default/files/public/styles/focal_point_large/public-s3/images/2019-03-16/duke-acc-title_0.jpg?h=157fa104&itok=30_VvRwP",
                                    title: "Kill Bill",
                                    year: 1996,
                                    genre: "Action & Adventure"
                                },
                                {
                                    src: "https://static.foxnews.com/foxnews.com/content/uploads/2019/03/ContentBroker_contentid-69dbf9e7dfac4a638f979c3d70c7321e-1.png",
                                    title: "Plup Function",
                                    year: 2002,
                                    genre: "Oscar-winning movie"
                                },
                                {
                                    src: "https://static01.nyt.com/images/2019/03/16/world/16nz-briefing-promo-03/16nz-briefing-promo-02-facebookJumbo.jpg",
                                    title: "Four rooms",
                                    year: 2006,
                                    genre: "Action"
                                },
                                {
                                    src: "https://cdn.cnn.com/cnnnext/dam/assets/190315113313-04-mafia-crime-families-have-evolved-file-restricted-use-super-tease.jpg",
                                    title: "Terminator 2",
                                    year: 1996,
                                    genre: "Drama"
                                },
                                {
                                    src: "https://www.ncaa.com/sites/default/files/public/styles/focal_point_large/public-s3/images/2019-03-16/duke-acc-title_0.jpg?h=157fa104&itok=30_VvRwP",
                                    title: "Kill Bill 2",
                                    year: 2004,
                                    genre: "Action & Adventure"
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(SearchResults);
