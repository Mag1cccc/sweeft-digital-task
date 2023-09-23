import { useState } from "react";
import { CountryList } from "./components/country/CountryList";

export const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };
  return (
    <div className="app">
      <CountryList />
      <div className="paragraph">
        <p className="mr-40"> CURRENCY EXCHANGE </p>
        <p> AIRPORTS </p>
      </div>
    </div>
  );
};
