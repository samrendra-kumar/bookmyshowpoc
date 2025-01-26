import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MovieProvider from "./context/MovieContext";
import Movie from "./pages/Movie";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MovieProvider>
    <App />
    </MovieProvider>
   
    </BrowserRouter>
 
  </React.StrictMode>
);
