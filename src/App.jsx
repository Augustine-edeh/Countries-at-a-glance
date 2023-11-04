import { useEffect, useState } from "react";
import Header from "./Components/UI/Header";

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
      .then((data) => setCountries(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="h-screen w-screen bg-gray-50">
      <Header />
      {countries && <h1 className="bg-blue-300">Countries Data is present</h1>}
      App
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
