const MovieCard = ({ movie }) => {
    return (
      <div className="bg-gray-800 text-white p-4 rounded shadow-md">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-64 object-cover rounded" />
        <h3 className="mt-2 text-lg font-bold">{movie.title}</h3>
        <p>Rating: {movie.vote_average}</p>
      </div>
    );
  };
  
  export default MovieCard;
  