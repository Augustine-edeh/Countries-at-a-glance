const Search = ({ onSearch }) => {
  const changeHandler = (event) => {
    onSearch(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    onSearch(document.querySelector("#search").value);
  };

  return (
    <div className="flex shadow-xl h-16 w-96 rounded-lg text-lightInput dark:text-darkText_LightElement bg-lightBg dark:bg-darkElement">
      <div className="w-1/12">
        <label
          className="grid place-content-center rounded-l-lg w-12 h-full bg-inherit text-inherit"
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
      <form className="w-11/12" onSubmit={submitHandler}>
        <input
          id="search"
          className="w-full px-6 h-full py-1 focus:outline-none rounded-r-lg bg-inherit text-inherit"
          placeholder="Search for a country..."
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default Search;
