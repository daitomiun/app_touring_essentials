import React from "react";

import { Link } from "react-router-dom";

export default function Country({ country }) {
  return (
    <Link to="details" state={{ countryName: country.name.common }}>
      <div className="country" key={country.name.official}>
        <div className="name">{country.name.common}</div>
        <div className="flag">
          <img src={country.flags.png} alt="" />
        </div>
      </div>
    </Link>
  );
}
