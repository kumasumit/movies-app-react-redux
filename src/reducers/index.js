import {  ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from "../actions";

const initialMovieState = {
    list: [], //this has the list of all the movies
    favourites: [],//this has all the list of favourites movies 
    showFavourites: false   
}
export default function movies(state=initialMovieState, action){
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
    switch(action.type){
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
            const filteredArray = state.favourites.filter(movie=>movie.Title !== action.movie.Title) 
            return {
                ...state,
                favourites: filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }       
        default:
            return state;        
    }
}

