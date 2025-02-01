import React, { useEffect } from "react";

function TrendingMovies({ setMovieList }) {
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYThmODU4YTE2N2ZjZWQ3ZDM0MGZmNTM0YWFjOTE2ZSIsIm5iZiI6MTczNzEzNDExOS4zOSwic3ViIjoiNjc4YTkwMjdkYmZlNTBhYTNkMWQyYTNmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.zwvtRXpQjm1EbIHWLXbl8iwKvY5EK6LYwPmapq4738Q'
          }
        };

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        if (data.results) {
          setMovieList(data.results);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchTrendingMovies();
  }, [setMovieList]); // Runs only on mount

  return null; // No UI needed, as data is shown through `PosterSlider`
}

export default TrendingMovies;



