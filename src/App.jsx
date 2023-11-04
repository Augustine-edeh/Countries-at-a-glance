import { useEffect, useState } from "react";
import Header from "./Components/UI/Header";
import Search from "./Components/UI/Search";
import Filter from "./Components/UI/Filter";
import CountryCard from "./Components/UI/CountryCard";

function App() {
  const [countries, setCountries] = useState();
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Could not fetch data");
        }
      })
      .then((data) => {
        console.log(data);
        setCountries(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <main className="h-screen w-screen bg-gray-50">
      <Header />
      <section className="p-5">
        <Search />
        <Filter />
        {countries && (
          <h1 className="bg-blue-300 mt-10">Countries Data is present</h1>
        )}

        {countries &&
          countries.map((country) => (
            <CountryCard data={country} key={Math.random().toString()} />
          ))}
      </section>
    </main>
  );
}

export default App;
