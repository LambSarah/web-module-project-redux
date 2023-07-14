import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favsReducer from './favsReducer';

const rootReducer = combineReducers({
    movies: movieReducer,
    favorites: favsReducer
})

export default rootReducer;