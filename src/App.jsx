import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/UI/Header";
import Home from "./Components/UI/Home";
import Footer from "./Components/UI/Footer";
import Country from "./Components/UI/Country";

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
        <Route path="/:countryName" element={<Country />} />
      </Routes>

      <Footer />
    </section>
  );
};

export default App;
