function CountryCard() {
  return (
    <div className="flex  flex-col shadow-lg h-15">
      <section className="h-40">
        <img src="" alt="flag" />
      </section>
      <section className="px-10 pt-3 pb-10">
        <p className="font-bold">United states of America</p>
        <p>
          <span className="font-bold">Population: </span>81,770,900
        </p>
        <p>
          <span className="font-bold">Region: </span>Europe
        </p>
        <p>
          <span className="font-bold">Capital: </span> Washington, DC.
        </p>
      </section>
    </div>
  );
}

export default CountryCard;
