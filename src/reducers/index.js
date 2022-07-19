import { ADD_MOVIES } from "../actions";

const initialMovieState = {
    list: [], //this has the list of all the movies
    favourites: [] //this has all the list of favourites movies    
}
export default function movies(state=initialMovieState, action){
    if(action.type===ADD_MOVIES){
        return {
            ...state,
            list: action.movies
        }
    }
    return state;
}

