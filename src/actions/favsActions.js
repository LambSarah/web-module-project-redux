export const TOGGLE_FAVS = 'TOGGLE_FAVS';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV'

export const toggleFavs = () => {
    return ({ type: TOGGLE_FAVS })
}

export const addFav = movie => {
    return ({ type: ADD_FAV, payload: movie })
}

export const removeFav = movie => {
    return ({ type: REMOVE_FAV, payload: movie })
}