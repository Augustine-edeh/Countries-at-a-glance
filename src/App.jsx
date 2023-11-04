import { useEffect, useState } from "react";

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
  return <div></div>;
}

export default App;
