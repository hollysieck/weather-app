//ON CLICK BOX
import React, {Component} from 'react';   



class MovieDisplay extends Component {  
    render() { 
        const {movie} = this.props; 
        return (   
            <div className="large-card">
                <div className="large-image">
                <img src="/img/2-big.jpg"/>
                    <button className="close">
                        X
                    </button>
                    <div className="title">
                        <h2>{movie.title}</h2>
                        <h3>{movie.rating}</h3>
                    </div>
                </div>
                <div className="information">
                    <p>{movie.description}</p>
                    <div className="movie-info">
                        <p>{movie.director} | {movie.released}</p>
                        <p>{movie.categories} </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDisplay;