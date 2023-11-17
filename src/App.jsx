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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countryName" element={<Country />} />
      </Routes>

      <Footer />
    </section>
  );
};

export default App;
