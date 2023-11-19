import { useNavigate } from "react-router-dom";
const Card = ({ countryData }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`${countryData.name.common}`);
    localStorage.setItem("countryData", JSON.stringify(countryData));
  };
  return (
    <div
      className="flex  flex-col shadow-lg h-15 rounded-lg overflow-hidden w-64 mb-10 transition-all duration-300 hover:scale-110 text-lightText dark:text-darkText_LightElement bg-lightBg dark:bg-darkElement cursor-pointer"
      onClick={clickHandler}
    >
      <section className="h-40">
        <img src={countryData.flags.png} alt="flag" className="w-full h-full" />
      </section>
      <section className="px-5  pb-10">
        <p className="font-bold mt-8 mb-5">{countryData.name.official}</p>
        <p>
          <span className="font-semibold">Population: </span>
          {countryData.population}
        </p>
        <p>
          <span className="font-semibold">Region: </span>
          {countryData.region}
        </p>
        <p>
          <span className="font-semibold">Capital: </span> {countryData.capital}
        </p>
      </section>
    </div>
  );
};

export default Card;
