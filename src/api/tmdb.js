

import axios from "axios";

const API_KEY = "2a8f858a167fced7d340ff534aac916e";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (type, query) => {
  let url = "";

  if (type === "search") {
    url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;
  } else if (type === "discover") {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${query}`;
   
  } else if (type === "cast")  {
    try{
        const actorResponse = await fetch(`${BASE_URL}/search/person?query=${query}&api_key=${API_KEY}`);
        const actorData = await actorResponse.json();
        
        if (!actorData.results || actorData.results.length === 0) {
          return []; // No actor found
        }
    
        // Extract movies from known_for field
        const knownMovies = actorData.results.flatMap(actor => actor.known_for);
    
        return knownMovies;
      } catch (error) {
        console.error("Error fetching cast movies:", error);
        return [];
      }
    }
    // First, search for the person (actor)
   


  try {
    const response = await axios.get(url,{mode:"cors"});
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

  
