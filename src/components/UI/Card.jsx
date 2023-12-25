import { useNavigate } from "react-router-dom";

const Card = ({ countryData }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`${countryData.name.common}`, {
      state: countryData,
    });
  };

  return (
    <button
      className="flex  flex-col shadow-lg h-15 rounded-lg overflow-hidden w-64 mb-10 transition-all duration-300 hover:scale-110 focus:scale-110 text-lightText dark:text-darkText_LightElement bg-lightBg dark:bg-darkElement cursor-pointer outline-none"
      onClick={clickHandler}
    >
      <section className="h-40 w-full">
        <img src={countryData.flags.png} alt="flag" className="w-full h-full" />
      </section>
      <section className="px-5  pb-10 text-left">
        <p className="font-black text-lg mt-8 mb-5">
          {countryData.name.official}
        </p>
        <p>
          <span className="font-normal">Population: </span>
          <span className="font-thin">{countryData.population}</span>
        </p>
        <p>
          <span className="font-normal">Region: </span>
          <span className="font-thin">{countryData.region}</span>
        </p>
        <p>
          <span className="font-normal">Capital: </span>{" "}
          <span className="font-thin">{countryData.capital}</span>
        </p>
      </section>
    </button>
  );
};

export default Card;
