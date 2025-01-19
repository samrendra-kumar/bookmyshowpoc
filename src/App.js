
import "./App.css";
import { useState,setTimeout,useEffect } from "react";
import TrendingMovies from "./components/Movie" ;
import MovieSearch from "./components/SearchMovie";
function App() {
  
  
  return (
  <div>
   
    <MovieSearch/>
      <TrendingMovies/> 
  </div>
  );
}

export default App;
