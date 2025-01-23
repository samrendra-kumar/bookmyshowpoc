import React,{useEffect,useState} from 'react'
import axios from "axios";
import TrendingMovies from '../components/Movie';
import MovieSearch from '../components/SearchMovie';
import Navbar from '../components/Navbar/NavbarComponent'; 
import HeroCarousel from '../components/HeroCarousel/HeroCarousel';
import EntertainSlider from '../components/Entertainment/EntertainmentCard';
import { BiHelpCircle } from 'react-icons/bi';
const Home =()=>
    {
   return (
  <div>

    <Navbar/>
    <HeroCarousel/>
    <div className="w-full flex justify-center py-5">
        <img
          src="/Asset/bmseimage.jpg"
          alt="BMS Image"
          className="w-full max-w-7xl h-auto px-5" // Add gaps and responsive width
        />
    </div>

    <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 my-3">
          The Best of Entertainment
        </h1>
        <EntertainSlider />
      </div>
 
    
    <TrendingMovies/>
    
  </div>
   )
    }


export default Home