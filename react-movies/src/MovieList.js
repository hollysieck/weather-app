//LEFT BOXES

import React, {Component} from 'react';


class MovieList extends Component {   
    render() { 
        const {movie ,onclick} = this.props; 

        return (
            <div className="preview-rectangle box">
                <button
                   onclick={ () => onclick(movie)}
                >
                <img src="/img/2-small.jpg"/>
                    <div className="title inline-block">
                                <h2>{movie.title}</h2>
                                 <h3>{movie.released}</h3>
                    </div>
                </button>
            </div>
        );
    }
}

export default MovieList;

