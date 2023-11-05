function CountryCard({ data }) {
  return (
    <div className="flex  flex-col shadow-lg h-15 bg-white rounded-lg overflow-hidden w-72">
      <section className="h-40">
        <img src={data.flags.png} alt="flag" className="w-full  h-full" />
      </section>
      <section className="px-10 pt-3 pb-10">
        <p className="font-bold">{data.name.common}</p>
        {data.flag}
        <p>
          <span className="font-bold">Population: </span>
          {data.population}
        </p>
        <p>
          <span className="font-bold">Region: </span>
          {data.region}
        </p>
        <p>
          <span className="font-bold">Capital: </span> {data.capital}
        </p>
      </section>
    </div>
  );
}

export default CountryCard;
