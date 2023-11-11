const Filter = (props) => {
  const changeHandler = (event) => {
    props.onFilter(event.target.value);
  };
  return (
    <select
      id="filter"
      onChange={changeHandler}
      className="px-5 h-16 shadow-xl rounded-lg text-lightText dark:text-darkText_LightElement bg-lightBg dark:bg-darkElement cursor-context-menu"
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Filter;
