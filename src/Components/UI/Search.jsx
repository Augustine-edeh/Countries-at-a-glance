const Search = () => {
  return (
    <div className="flex items-center justify-center max-w-md mx-auto rounded-lg shadow-md  bg-blue-500">
      <div className="h-full">
        <label
          className="grid place-content-center  w-12 h-12 text-gray-500 rounded-l-lg bg-white"
          htmlFor="search"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </label>
      </div>
      <div className="w-full h-full">
        <input
          id="search"
          className="w-full px-4 h-12 py-1 text-gray-800 rounded-r-lg focus:outline-none bg-white"
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
};

export default Search;
