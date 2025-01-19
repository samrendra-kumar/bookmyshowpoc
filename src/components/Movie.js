import React, { useState,useEffect } from "react";

function TrendingMovies() {
  //const [searchQuery, setSearchQuery] = useState(""); // User's search input
  const [movieList, setMovieList] = useState([]); // Movies to display
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state for no results
  useEffect(()=>
    {
      const Movies = async () => {
    

        setIsLoading(true);
        setError(null);
    
        try {
          // Make the API call
          const url='https://api.themoviedb.org/3/trending/movie/day?language=en-US'
          const options=
          {
            method:'GET',
            headers:
            {
              accept:'application/json',
              Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYThmODU4YTE2N2ZjZWQ3ZDM0MGZmNTM0YWFjOTE2ZSIsIm5iZiI6MTczNzEzNDExOS4zOSwic3ViIjoiNjc4YTkwMjdkYmZlNTBhYTNkMWQyYTNmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.zwvtRXpQjm1EbIHWLXbl8iwKvY5EK6LYwPmapq4738Q'
            }
          }
          const response = await fetch(url,options);
    
          if (!response.ok) {
            throw new Error("Failed to fetch");
          }
    
          const data = await response.json();
    
          if (data.results && data.results.length > 0) {
            setMovieList(data.results);
          } else {
            setMovieList([]);
            setError("No movies found!");
          }
        } catch (err) {
          console.error("Error fetching movies:", err);
          setError("Something went wrong! Please try again.");
        } finally {
          setIsLoading(false);
        }
      };
      Movies() ;
    },[])
  

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Trending Movies</h1>

      {/* Search Input */}
      <div style={{ marginBottom: "20px" }}>
        {/* <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: "10px", width: "300px", fontSize: "16px" }}
        /> */}
        {/* <button
          onClick={searchMovies} // Trigger searchMovies function
          style={{
            padding: "10px 20px",
            marginLeft: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Search
        </button> */}
      </div>

      {/* Loading State */}
      {isLoading && <p>Loading...</p>}

      {/* Error State */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Movie List */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {movieList.map((movie) => (
          <div
            key={movie.id}
            style={{
              textAlign: "center",
              width: "200px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                style={{ width: "100%", borderRadius: "10px" }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p>No Image</p>
              </div>
            )}
            <p>{movie.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingMovies;


