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

  // useEffect(() => {
  //   document.querySelector("#xxx").onfocus = () => {
  //     document.querySelector("#xxx_").classList.add("hidden");
  //   };
  //   document.querySelector("#xxx").onblur = () => {
  //     document.querySelector("#xxx_").classList.remove("hidden");
  //   };
  // });
  return (
    <main className="h-screen w-screen bg-gray-50">
      <Header />
      <section className="p-5">
        <Container styleClasses={"mt-3 flex justify-between  flex-wrap gap-12"}>
          <Search />
          <Filter />
        </Container>

        {/* <div className="flex">
          <input id="xxx" type="text" className="relative bg-red-300" />
          <label
            id="xxx_"
            htmlFor="xxx"
            className="ml-3 flex items-center gap-3 absolute"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
              ></path>
            </svg>
            Search...
          </label>
        </div> */}
        {countries && (
          <h1 className="bg-blue-300 mt-10">Countries Data is present</h1>
        )}
        <Container styleClasses={"mt-3 flex flex-wrap justify-center gap-10"}>
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
