
import "./App.css";
import { useState,setTimeout,useEffect } from "react";
import {Routes,Route}from "react-router-dom";
import axios from "axios";
 import Home from "./pages/Home";
 import Movie from "./pages/Movie";
import Footer from "./components/Footer/Footer";
import Booking from "./components/BookTicket/Booking";
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={} ;
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;
function App() { 
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/movie/:id" element={<Movie/>}></Route>
      <Route path="/booking/:id" element={<Booking/>}></Route>
    </Routes>
  
  );
}

export default App;
