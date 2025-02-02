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

  const handleSearch = async () => {
    const results = await fetchMovies(filterType, query);
    setMovies(results);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-white">
        {filterType === "search"
          ? "Search Movies"
          : filterType === "discover"
          ? "Discover Movies"
          : "Find Movies by Cast/Crew"}
      </h1>

      <SearchBox query={query} setQuery={setQuery} onSearch={handleSearch} placeholder={filterType === "cast" ? "Enter Actor Name" : "Enter Movie Name"} />

      <div className="grid grid-cols-4 gap-4 mt-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FilterPage;
