export const ADD_FAVORITE = 'ADD_FAVORITE';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

export const addFavorite = movieId => {
    return ({ type: ADD_FAVORITE, payload: movieId })
}

export const toggleFavorites = () => {
    return ({ type: TOGGLE_FAVORITES })
}