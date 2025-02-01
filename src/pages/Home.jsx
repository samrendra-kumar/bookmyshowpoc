import React,{useEffect,useState} from 'react'
import axios from "axios";
import TrendingMovies from '../components/Movie';
import MovieSearch from '../components/SearchMovie';
import Navbar from '../components/Navbar/NavbarComponent'; 
import HeroCarousel from '../components/HeroCarousel/HeroCarousel';
import EntertainSlider from '../components/Entertainment/EntertainmentCard';
import PosterSlider from '../components/PosterSlider/PSSlider';
import { BiHelpCircle } from 'react-icons/bi';
const Home =()=>{
  const[recommendMovies,setrecommendMovies]=useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(()=>
      {
        const TopRatedMovies= async()=>
          {
            const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
            const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYThmODU4YTE2N2ZjZWQ3ZDM0MGZmNTM0YWFjOTE2ZSIsIm5iZiI6MTczNzEzNDExOS4zOSwic3ViIjoiNjc4YTkwMjdkYmZlNTBhYTNkMWQyYTNmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.zwvtRXpQjm1EbIHWLXbl8iwKvY5EK6LYwPmapq4738Q'
              }
            };
          try
          {
            const response=await fetch(url,options);
            if(!response.ok)
              {
                throw new Error(`HTTP error!`)
              }
              const data=await response.json() ;
              //console.log(data.results);
              setrecommendMovies(data.results);
              //console.log(recommendMovies)
          }catch(error)
          {
            console.error("Error fetching movies:", error);
          }
        
          };    
          TopRatedMovies();      
      },[])

      // useEffect(() => {
      //   console.log("Updated recommendMovies:", recommendMovies);
      // }, [recommendMovies]);
   return (
  <div>

    <Navbar/>
    <HeroCarousel/>
    <div className="w-full flex justify-center py-5">
        <img
          src="/Asset/bmseimage.jpg"
          alt="BMS Image"
          className="w-full max-w-7xl h-auto px-5" 
        />
    </div>

    <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 my-3">
          The Best of Entertainment
        </h1>
        <EntertainSlider />
      </div>
 
    {/* //recommendMovies */}
    <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of Recommended Movies"
          posters={recommendMovies}
          isDark={false}
        />
      </div>
    {/* Trending Movies */}
    <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider
          title="Trending Movies"
          subtitle="Trending movies right now"
          posters={trendingMovies}
          isDark={true}
        />
      </div>
      <div className="font-normal font-black">
      <TrendingMovies setMovieList={setTrendingMovies} />
    
      </div>
      
  </div>
   )
    }


export default Home