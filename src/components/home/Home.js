import { SearchCountries, GetAllCountries } from "../../services/Countries";
import { useEffect, useState } from "react";
import Country from "../country/Country";

export default function Home() {
  const [countries, setCountries] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search === "") {
      GetAllCountries().then((response) => {
        setCountries(response);
      });
    } else {
      SearchCountries(search).then((response) => {
        setCountries(response);
      });
    }
  }, [search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <h1>Touring essentials</h1>
      <div className="card">
        <div className="container">
          <input
            className="search-bar"
            type="text"
            id="search-bar"
            onChange={handleSearch}
            value={search}
            placeholder="Busca un pais..."
          />
        </div>
        {countries !== undefined ? (
          countries.map(function (country) {
            return <Country country={country} />;
          })
        ) : (
          <div className="not-found">no hay ningun pais con este nombre!</div>
        )}
      </div>
    </div>
  );
}
