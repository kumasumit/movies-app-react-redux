
import { ADD_MOVIES, ADD_MOVIE_TO_LIST, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES, ADD_SEARCH_RESULT } from "../actions";
import { combineReducers } from "redux";

const initialMovieState = {
    list: [], //this has the list of all the movies
    favourites: [],//this has all the list of favourites movies 
    showFavourites: false
};
export function movies(state = initialMovieState, action) {
    // console.log("Movies Reducer");
    // if(action.type===ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // if(action.type===ADD_FAVOURITE){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }

        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]

            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(movie => movie.Title !== action.movie.Title)
            return {
                ...state,
                favourites: filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list]
            }
        default:
            return state;
    }
};
//Search Reducer
const initialSearchState = {
    result: {},
    showSearchResults: false
};
export function search(state = initialSearchState, action) {
    // console.log("Search Reducer")
    switch (action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResults: true
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResults: false
            }
        default:
            return state;
    }
};
// const initialRootState = {
//     movies: initialMovieState,
//     search: initialSearchState
// };
// export default function rootReducer (state = initialRootState, action)
// {
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }

// };
//this is how redux internally implements combineReducers

export default combineReducers({
    movies: movies, //movies is managed by movie reducer
    search: search  //search is managed by search reducer
});