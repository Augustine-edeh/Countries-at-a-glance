import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import Home from "./components/pages/Home";
import Footer from "./components/UI/Footer";
import CountryDetail from "./components/pages/CountryDetail";

const App = () => {
  useEffect(() => {
    const underConstructionNote =
      " 🚧 Project Under Construction 🚧\n\nThanks for stopping by! This project is currently under development. I'm crafting an amazing responsive experience for the best adventure, just for you.\n \n-Augustine 🚀📱 ";
    window.onload = () => alert(underConstructionNote);
  });
  return (
    <section className="min-h-screen bg-lightBg dark:bg-darkBg relative">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:countryName" element={<CountryDetail />} />
      </Routes>

      <Footer />
    </section>
  );
};

export default App;
