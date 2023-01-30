import React, {useState} from 'react';
import Movie from "../component/Movie";
import MovieForm from "../component/MovieForm";
const Movies = () => {
    const [movies,setMovies]=useState([]); 
   const addMovie = (movie) => {
      setMovies([
         ...movies,
         movie
      ])
   }

   const removeMovie = (id) => {
      setMovies(movies.filter(movie => {
         return movie.id !==id;
      }))
   }
   const renderMovies = movies.length ? movies.map((movie) => {
      return(
         <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />
      )
   }) : <p className="movie_add">영화를 추가해주세요</p>;
    return (
        <div className="pd">
           <h1>영화 list</h1>
           <MovieForm  addMovie={addMovie}/>
           {renderMovies}
        </div>
    );
};

export default Movies;