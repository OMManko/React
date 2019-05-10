export const endPoint = 'http://react-cdp-api.herokuapp.com/movies';

export const moviePosterSizes = {
    SMALL: 'moviePoster__small',
    MEDIUM: 'moviePoster__medium'
};

export const sortOptions = {
    RELEASE: 'release',
    RATING: 'vote_average'
};

export const filterOptions = {
    TITLE: 'title',
    GENRE: 'genres'
};


export const actionTypes = {
    SEARCH_BY: 'SEARCH_BY',
    SORT_BY: 'SORT_BY',
    SEARCH_MOVIES: 'SEARCH_MOVIES',
    UPDATE_INPUT_VALUE: 'UPDATE_INPUT_VALUE',
    SET_SELECTED_MOVIE: 'SET_SELECTED_MOVIE',
    RESET_SELECTED_MOVIE: 'RESET_SELECTED_MOVIE'
};

export const initialState = {
    moviesList: [],
    moviesFound: 0,
    searchInputValue: '',
    selectedSortOption: sortOptions.RELEASE,
    selectedFilterOption: filterOptions.TITLE,
    selectedMovieInfo: {}
};
