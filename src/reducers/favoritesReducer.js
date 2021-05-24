import { ADD_FAVORITE, TOGGLE_FAVORITES } from '../actions/favoriteActions.js'

export const initialState = {
    favorites: [{
        id: 0,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        metascore: 100,
        genre: "Drama",
        description: "War hero Michael is the prodigal son of aging but fearsome crime patriarch Don Vito Corleone. When Michael returns home only to be thrust into an all-too-familiar world of hitmen, corrupt cops, and simmering mafia rivalries, he is forced to choose between his own path and the Corleone family legacy."
    },],
    displayFavorites: true,
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITE:
            const newFav = action.payload;
            return {
                ...state,
                favorites: [...state.favorites, newFav]
            }
        default:
            return state;
    }
}

export default favoritesReducer;