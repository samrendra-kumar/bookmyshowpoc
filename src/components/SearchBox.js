const SearchBox = ({ query, setQuery, onSearch, placeholder }) => {
    return (
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border border-gray-400 rounded w-full"
          placeholder={placeholder}
        />
        <button onClick={onSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
    );
  };
  
  export default SearchBox;
  