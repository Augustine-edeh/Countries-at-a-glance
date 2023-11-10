import { useEffect, useState } from "react";
import Header from "./Components/UI/Header";
import Search from "./Components/UI/Search";
import Filter from "./Components/UI/Filter";
import CountryCard from "./Components/UI/CountryCard";
import Container from "./Components/UI/Container";
import Footer from "./Components/UI/Footer";
import ErrorPage from "./Components/UI/FetchError";

function App() {
  const [countries, setCountries] = useState([]);
  const [result, setResult] = useState();
  const [isFetchError, setIsFetchError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const searchHandler = (searchValue) => {
    setResult(
      countries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(searchValue.trim().toLowerCase())
      )
    );
  };

  const filterHandler = (region) => {
    setResult(
      countries.filter((country) =>
        country.region.toLowerCase().includes(region.toLowerCase())
      )
    );
  };

  const underConstructionNote =
    " 🚧 Project Under Construction 🚧\n\nThanks for stopping by! This project is currently under development and we're crafting an amazing responsive experience for the best adventure, just for you.\n \n-Country-Pedia Team 🚀📱 ";

  useEffect(() => {
    fetch("https://restcountries.com/v8.1/all")
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
        setIsFetchError(true);
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, []);

  return (
    <section className="min-h-screen bg-lightBg dark:bg-darkBg relative">
      <Header />
      <main className="p-5 md:p-10 xl:px-40 2xl:px-72">
        <Container
          styleClasses={"mt-24 mb-20 flex justify-between  flex-wrap gap-12"}
        >
          <Search onSearch={searchHandler} />
          <Filter onFilter={filterHandler} />
        </Container>

        <Container
          styleClasses={"flex flex-wrap justify-around gap-5 lg:gap-10 mb-40"}
        >
          {countries.length > 0 ? (
            isFetchError ? (
              <p>Error: {errorMessage}</p>
            ) : result.length > 0 ? (
              result
                .sort((a, b) =>
                  a.name.common
                    .toUpperCase()
                    .localeCompare(b.name.common.toUpperCase())
                )
                .map((country) => (
                  <CountryCard
                    countryData={country}
                    key={Math.random().toString()}
                  />
                ))
            ) : (
              <div className="my-14 md:my-20 xl:my-24 text-lightText dark:text-darkText_LightElement bg-darkText_LightElement dark:bg-darkElement shadow-lg px-5 py-3 rounded-xl">
                <p className="font-bold text-red-500 dark:text-red-400 text-lg md:text-xl 2xl:text-2xl border-l border-r  border-gray-400 dark:border-gray-600 px-5 rounded-3xl">
                  Country not found
                </p>
              </div>
            )
          ) : (
            <p>
              {isFetchError ? (
                <ErrorPage />
              ) : (
                <div className="my-14 md:my-20 xl:my-24 text-lightText dark:text-darkText_LightElement bg-darkText_LightElement dark:bg-darkElement shadow-lg px-5 py-3 rounded-xl">
                  <p className="text-lightText dark:text-darkText_LightElement md:text-xl 2xl:text-2xl dark:border-gray-600 px-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 animate-spin"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </p>
                </div>
              )}
            </p>
          )}
        </Container>
      </main>
      <Footer />
    </section>
  );
}

export default App;
