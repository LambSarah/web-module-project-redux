import React from 'react';
import { connect } from 'react-redux'

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
// import { deleteMovie } from '../actions/movieActions.js'
//import reducer, { initialState } from '../reducers/movieReducer.js'

const MovieList = props => {
    //const [movies, setMovies] = useState([])

    //const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Director</th>
                        <th>Genre</th>
                        <th>Metascore</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        props.movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)
                    }
                </tbody>
            </table>

            <MovieFooter totalMovies={props.movies.length} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         dispatch
//     }
// }

export default connect(mapStateToProps, {})(MovieList);