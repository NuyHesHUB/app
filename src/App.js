import './App.css';
/* import React,{useState, useRef, useEffect} from "react" */
/* 여기서 다시 임포트 */
/* import Movie from './component/Movie' */
/* import MovieForm from './component/MovieForm'; *//* 23.01.27 MovieForm Component */
import Navbar from './component/Navbar';/* 23.01.27 Navbar Component */
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Users from "./pages/Users"
import Detail from "./component/HomeDetail"
/* import Footer from "./component/Footer" */

function App(){
  return(
    <div className='App'>
      <Navbar/>
        <Routes>
          <Route path="/App" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="movies" element={<Movies/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
      {/* <Footer/> */}
    </div>
    )
} 

export default App;
