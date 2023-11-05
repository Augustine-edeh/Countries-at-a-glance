function CountryCard({ countryData }) {
  return (
    <div className="flex  flex-col shadow-lg h-15 bg-white rounded-lg overflow-hidden w-72 mb-10 transition-all duration-300 hover:scale-110">
      <section className="h-40">
        <img
          src={countryData.flags.png}
          alt="flag"
          className="w-full  h-full"
        />
      </section>
      <section className="px-10 pt-3 pb-10">
        <p className="font-bold">{countryData.name.common}</p>
        {countryData.flag}
        <p>
          <span className="font-bold">Population: </span>
          {countryData.population}
        </p>
        <p>
          <span className="font-bold">Region: </span>
          {countryData.region}
        </p>
        <p>
          <span className="font-bold">Capital: </span> {countryData.capital}
        </p>
      </section>
    </div>
  );
}

export default CountryCard;
