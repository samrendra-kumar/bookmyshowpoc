import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from "../../api/tmdb";
import MovieCard from "../MovieCard/MovieCard";
import SearchBox from "../SearchBox";

const FilterPage = () => {
  const [searchParams] = useSearchParams();
  const filterType = searchParams.get("type"); // search, discover, cast
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState(false);
  const handleSearch = async () => {
    if (!query.trim()) return;
    const results = await fetchMovies(filterType, query);
    setMovies(results);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black text-black flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-200">
        {filterType === "search"
          ? "Search Movies"
          : filterType === "discover"
          ? "Discover Movies"
          : "Find Movies by Cast/Crew"}
      </h1>

      <div className="relative w-full max-w-lg">
      <SearchBox 
      query={query} 
      setQuery={setQuery} 
      onSearch={handleSearch} 
      placeholder={filterType === "cast" ? "Enter Actor Name" : "Enter Movie Name"} 
      className="w-full px-5 py-3 text-lg text-black bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400 font-extrabold"
      />
      </div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-5xl">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) :searched ? (
          <p className="text-gray-300 text-center col-span-full">No results found.</p>
        ):null}
      </div>
    </div>
  );
};

export default FilterPage;
