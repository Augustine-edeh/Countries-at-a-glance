import { Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import Home from "./components/pages/Home";
import Footer from "./components/UI/Footer";
import CountryDetail from "./components/pages/CountryDetail";

const App = () => (
  <section className="min-h-screen bg-lightBg dark:bg-darkBg relative">
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:countryName" element={<CountryDetail />} />
    </Routes>

    <Footer />
  </section>
);
export default App;
