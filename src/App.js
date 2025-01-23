
import "./App.css";
import { useState,setTimeout,useEffect } from "react";
import TrendingMovies from "./components/Movie" ;
import MovieSearch from "./components/SearchMovie";
import Navigation from "./components/Navbar/NavbarComponent";
 import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
 import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
function App() {
  
  
  return (
  <div>
   <Home/>
      {/* <Footer/> */}
  </div>
  );
}

export default App;
