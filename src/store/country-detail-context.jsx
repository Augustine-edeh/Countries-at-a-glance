import React, { useState, useEffect } from "react";
const CountryDetailContext = React.createContext({
  name: "Augustine Adefemi Damilare",
  selectedCountry: () => {}, // Added for vs-code IDE autocompletion suggestion support
});

export const CountryDetailContextProvider = (props) => {
  //   useEffect(() => console.log("inside the context Component!!!"));
  const [name, setName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const setNameHandler = (newName) => {
    setName(newName);
  };
  const setSelectedCountryHandler = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  return (
    <CountryDetailContext.Provider
      value={{
        name: name,
        setName: setNameHandler,
        selectedCountry: selectedCountry,
        setSelectedCountry: setSelectedCountryHandler,
      }}
    >
      {props.children}
    </CountryDetailContext.Provider>
  );
};
export default CountryDetailContext;
