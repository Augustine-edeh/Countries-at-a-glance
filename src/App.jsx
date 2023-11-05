import { useEffect, useState } from "react";
import Header from "./Components/UI/Header";
import Search from "./Components/UI/Search";
import Filter from "./Components/UI/Filter";
import CountryCard from "./Components/UI/CountryCard";
import Container from "./Components/UI/Container";

function App() {
  const [countries, setCountries] = useState();

  const underConstructionNote =
    " 🚧 Project Under Construction 🚧\n\nThanks for stopping by! This project is currently under development and we&apos;re crafting an amazing responsive experience for you. For the best adventure at this time, we recommend viewing it on your mobile device. \nStay tuned for updates and thank youfor your patience. \n \n-Country-Pedia Team 🚀📱 ";

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
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <main className="h-screen w-screen bg-gray-50">
      <Header />
      <section className="p-5">
        <Container
          styleClasses={"mt-5 mb-14 flex justify-between  flex-wrap gap-12"}
        >
          <Search />
          <Filter />
        </Container>

        <Container styleClasses={"flex flex-wrap justify-center gap-10"}>
          {countries &&
            countries.map((country) => (
              <CountryCard
                countryData={country}
                key={Math.random().toString()}
              />
            ))}
        </Container>
      </section>
    </main>
  );
}

export default App;
