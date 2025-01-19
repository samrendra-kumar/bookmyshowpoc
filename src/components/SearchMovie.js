import React,{useState,useEffect} from 'react';

function MovieSearch()
{
    const[searchQuery,setSearchQuery]=useState("");
    const[searchMovie,setSearchMovie]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
    const[error,setError]=useState(null);

    const[triggerSearch,setTriggerSearch]=useState(false);
    useEffect(()=>
        {
         if(!triggerSearch) return ;

         const fetchmovies=async()=>
            {
                if (!searchQuery.trim()) {
                    setError("Please enter a valid movie title!");
                    setSearchMovie([]);
                    setTriggerSearch(false);
                    return;
                  }
            
                  setIsLoading(true);
                  setError(null);

                  try
                  {
                const res=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2a8f858a167fced7d340ff534aac916e&query=${encodeURIComponent(
                    searchQuery
                  )}&page=1`);
                  
                  const data= await res.json() ;
                  console.log(data);
                  if( data.results.length>0)
                    {

                        setSearchMovie(data.results);
                        console.log(searchMovie);
                    }else
                    {
                        setSearchMovie([]);
                        setError("No movies found");
                    }
        
                  }catch(error)
                  {
                    console.error("Error fetching movies:", error);
                   setError("Something went wrong! Please try again.");
                  }finally
                  {
                    setIsLoading(false);
                    setTriggerSearch(false);
                  }
            }
           fetchmovies() ;
        },[triggerSearch,searchQuery]);

        const handleSearch=()=>
            {
                setTriggerSearch(true);
            }

            return(
            
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Movie Search</h1>

      {/* Search Input */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: "10px", width: "300px", fontSize: "16px" }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            marginLeft: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
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
        {searchMovie.map((movie) => (
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
            )
}

export default MovieSearch;