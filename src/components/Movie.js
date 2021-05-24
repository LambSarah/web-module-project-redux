import React from 'react'

import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteMovie } from '../actions/movieActions'
import { addFav } from '../actions/favsActions'

import './Movie.css'

const Movie = props => {
    const { id } = useParams()
    const { push } = useHistory()

    const movies = props.movies;
    const movie = movies.find(movie => movie.id === Number(id));

    const displayFavorites = props.displayFavorites;

    const handleDelete = id => {
        props.deleteMovie(id)
        console.log('delete button clicked', movie.id)
        push('/movies')
    }

    const handleAddFav = movie => {
        props.addFav(movie);
        console.log('added Favorite', movie)
        push(`/movie/${id}`)
    }

    return (<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>

                        <section>
                            <form>
                                <div className={displayFavorites ? 'hidden' : 'visible'}>
                                    <span
                                        onClick={() => { handleAddFav(movie) }}
                                        className="m-2 btn btn-dark"
                                    >
                                        Favorite
                                </span>
                                </div>
                                <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete" onClick={() => { handleDelete(movie.id) }} /></span>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div >);
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
        favorites: state.favorites.favorites,
        displayFavorites: state.favorites.displayFavorites
    }
}
export default connect(mapStateToProps, { deleteMovie, addFav })(Movie)