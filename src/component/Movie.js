import React from 'react';
/* (props) */
const Movie =  ({movie, removeMovie})=> {
    return (
        <div className='movie'>
            <div className='movie-title'>{movie.title}
                <span className='movie-year'>{movie.year}</span>
            </div>
            <div><button className='d-btn' onClick={()=> removeMovie(movie.id)}>삭제</button></div>
        </div>
    );
};

export default Movie;