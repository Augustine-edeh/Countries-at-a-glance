// import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/UI/Header";
import Home from "./Components/UI/Home";
import Footer from "./Components/UI/Footer";
import Country from "./Components/UI/Country";

const App = () => {
  return (
    <section className="min-h-screen bg-lightBg dark:bg-darkBg relative">
      <Header />
      {/* <main className="p-5 md:p-10 xl:px-40 2xl:px-72">
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
              <ErrorPage errorMessage={errorMessage} />
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
              <CountryNotFoundUI />
            )
          ) : (
            <>
              {isFetchError ? (
                <ErrorPage errorMessage={errorMessage} />
              ) : (
                <LoadingUI />
              )}
            </>
          )}
        </Container>
      </main> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countryName" element={<Country />} />
      </Routes>

      <Footer />
    </section>
  );
};

export default App;
