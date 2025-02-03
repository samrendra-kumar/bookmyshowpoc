
import "./App.css";
import { useState,setTimeout,useEffect } from "react";
import {Routes,Route}from "react-router-dom";
import axios from "axios";
 import Home from "./pages/Home";
 import Movie from "./pages/Movie";
import Footer from "./components/Footer/Footer";
import Booking from "./components/BookTicket/Booking";
import FilterPage from "./components/FillterPage/FilterPage";
axios.defaults.baseURL="https://api.themoviedb.org/3";

axios.defaults.params={} ;
axios.defaults.params["api_key"]='2a8f858a167fced7d340ff534aac916e';
function App() { 
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/movie/:id" element={<Movie/>}></Route>
      <Route path="/booking/:id" element={<Booking/>}></Route>
      <Route path="/filter" element={<FilterPage />} />

    </Routes>
  
  );
}

export default App;
