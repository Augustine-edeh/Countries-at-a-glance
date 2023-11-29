import countryFullNames from "../DB/CountryFullNameDB";

const getCountryCommonName = (cca3) => {
  return countryFullNames[0].data[cca3].country;
};

export default getCountryCommonName;
