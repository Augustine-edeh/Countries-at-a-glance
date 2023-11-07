import { useEffect, useState } from "react";
import Header from "./Components/UI/Header";
import Search from "./Components/UI/Search";
import Filter from "./Components/UI/Filter";
import CountryCard from "./Components/UI/CountryCard";
import Container from "./Components/UI/Container";

function App() {
  const [countries, setCountries] = useState();
  const [result, setResult] = useState();

  const searchHandler = (searchValue) => {
    setResult(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  const underConstructionNote =
    " 🚧 Project Under Construction 🚧\n\nThanks for stopping by! This project is currently under development and we're crafting an amazing responsive experience for the best adventure, just for you.\n \n-Country-Pedia Team 🚀📱 ";

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
        alert(underConstructionNote);
        setCountries(data);
        setResult(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <section className="h-screen w-screen bg-gray-50">
      <Header />
      <main className="p-5 md:p-10 xl:px-40 2xl:px-72">
        <Container
          styleClasses={"mt-5 mb-14 flex justify-between  flex-wrap gap-12"}
        >
          <Search onSearch={searchHandler} />
          <Filter />
        </Container>

        <Container
          styleClasses={"flex flex-wrap justify-around gap-5 lg:gap-10"}
        >
          {countries &&
            result.map((country) => (
              <CountryCard
                countryData={country}
                key={Math.random().toString()}
              />
            ))}
        </Container>
      </main>
    </section>
  );
}

export default App;
