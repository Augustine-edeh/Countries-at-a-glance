function Filter(props) {
  const changeHandler = (event) => {
    props.onFilter(event.target.value);
  };
  return (
    <select
      id="filter"
      onChange={changeHandler}
      className="px-5 h-16 bg-white shadow-xl rounded-lg"
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default Filter;
