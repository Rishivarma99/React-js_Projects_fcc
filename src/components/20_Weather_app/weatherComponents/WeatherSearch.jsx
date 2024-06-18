const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <>
      <div className="weather-search-engine">
        <input
          type="text"
          className="weather-city-search"
          placeholder="Enter any city name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="button"
          className=" weather-search-button btn btn-warning"
          onClick={handleSearch}
        >
          Get Weather
        </button>
      </div>
    </>
  );
};

export default Search;
