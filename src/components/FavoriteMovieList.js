import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { removeFav } from '../actions/favsActions'


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;

    const handleRemoveFav = movie => {
        props.removeFav(movie);
    }


    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie => {
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}</Link>

                    <button onClick={() => { handleRemoveFav(movie) }}>    <span  >
                        <span className="material-icons">remove_circle</span></span>
                    </button>
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites.favorites
    }
}

export default connect(mapStateToProps, { removeFav })(FavoriteMovieList);