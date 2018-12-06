import React, {Component} from 'react';
import MovieList from './MovieList';
import MovieDisplay from './MovieDisplay';
import './style.css';

import {movies} from './GemmeThatMovieList';




class AllMovies extends Component {  


    _setCurrentMovie = (movie) => {
        console.log(movie.title)
        this.setState({
            ...this.state,
                currentMovie: movie
        });
    }

    constructor(props) {
        super(props);
        
        this.state = {
            currentMovie: ' '
        };

        this.setCurrentMovie = this._setCurrentMovie.bind(this);
    }





    render() { 
        return ( 
            <div className="container">
                <h1>Movie Database</h1>
                <div className="inline-block margin-right">
                {
                    movies.map((movie) => {
                        return (
                            <MovieList
                                onclick={this.setCurrentMovie}
                                movie={movie}
                            />
                        )
                    })
                }
                </div>
                <div className="inline-block">
                {
                    movies.map((movie) => {
                        return (
                            <MovieDisplay 
                                movie={movie}
                            />
                    )
                })
                }
                </div>
            </div>
        );
    }
}

export default AllMovies;