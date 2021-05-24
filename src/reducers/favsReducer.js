import { favorites } from './../data.js'
import { TOGGLE_FAVS, ADD_FAV, REMOVE_FAV } from '../actions/favsActions'


export const initialState = {
    favorites: favorites,
    displayFavorites: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVS:
            console.log('toggling favs', state.displayFavorites)
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAV:
            const newFav = action.payload
            return {
                ...state,
                favorites: [...state.favorites, newFav]
            }
        case REMOVE_FAV:
            console.log('remove fav clicked', action.payload)
            const favToDelete = action.payload
            return {
                ...state,
                favorites: state.favorites.filter(item => (favToDelete.id !== item.id))
            }
        default:
            return state;
    }
}

export default reducer;