
import "./App.css";
import { useState,setTimeout,useEffect } from "react";
import TrendingMovies from "./components/Movie" ;
import MovieSearch from "./components/SearchMovie";
import Navigation from "./components/Navbar/NavbarComponent";
 import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import Footer from "./components/Footer/Footer";
function App() {
  
  
  return (
  <div>
   <Navigation/>
   <HeroCarousel/>
    <MovieSearch/>
      <TrendingMovies/> 
      {/* <Footer/> */}
  </div>
  );
}

export default App;
