import { React, useEffect, useState } from "react";
import { GetCountryByName } from "../../services/Countries";
import { useLocation, Link } from "react-router-dom";
import getObjectEntries from "../utils/getObjectEntries";
import openStreetMaps from "../../assets/OpenStreetMap.png";
import googleMaps from "../../assets/googleMaps.png";

export default function CountryDetails() {
  let { state } = useLocation();

  const { countryName } = state || "";
  const [countryDetails, setCountryDetails] = useState();

  useEffect(() => {
    GetCountryByName(countryName).then((response) => {
      setCountryDetails(response);
    });
  }, [countryName]);

  return (
    <div>
      {!countryName || !countryDetails ? (
        <div className="card">
          <div className="details__card">
            <div className="not-found">
              <Link to="/">
                <button className="button">Volver</button>
              </Link>
              <h2>no hay paises por mostrar!</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card__container">
            <Link to="/">
              <button className="button">Volver</button>
            </Link>
            {countryDetails.map(function (country) {
              return (
                <div>
                  <div className="card__flag" key={country.name.common}>
                    <img
                      className="card__flag__img"
                      src={country.flags.png}
                      alt=""
                    />
                    <h3>{country.name.common}</h3>
                  </div>
                  <div className="container__content">
                    <div className="card__capital content">
                      <p>Capital</p>
                      <h4>{country.capital}</h4>
                    </div>
                    <div className="card__currency content">
                      <p>Moneda</p>
                      <h4>
                        {
                          country.currencies[Object.keys(country.currencies)[0]]
                            .name
                        }
                      </h4>
                    </div>
                    <div className="card__language content">
                      <p>Lenguajes</p>
                      <h4>{getObjectEntries(country.languages)}</h4>
                    </div>
                  </div>
                  <div className="card__map">
                    <h3>Mapas</h3>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={country.maps.googleMaps}
                    >
                      <img className="card__map__img" src={googleMaps} alt="" />
                    </a>

                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={country.maps.openStreetMaps}
                    >
                      <img
                        className="card__map__img"
                        src={openStreetMaps}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
