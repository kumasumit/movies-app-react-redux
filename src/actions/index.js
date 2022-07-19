//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_ FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
//action creators
export function addMovies(movies){
    return {
       type: ADD_MOVIES,
       movies
    } 
}

export function addFavourite(movie){
    return {
       type: ADD_TO_FAVOURITES,
       movie
    } 
}

export function removeFromFavourites(movie){
    return {
       type: REMOVE_FROM_FAVOURITES,
       movie
    } 
}

export function setShowFavourites(val){
    return {
        type: SET_SHOW_FAVOURITES, 
        val
    }
}