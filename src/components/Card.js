import React from "react";

const Card = ({ country }) => {
  return (
    <div className="card">
      <img
        src={country.flags.svg}
        alt={`Drapeau ${country.translations.fra.common}`}
      />
      <div className="infos">
        <h4>{country.translations.fra.common}</h4>
        <h5>{country.capital}</h5>
        <p>Pop. {country.population.toLocaleString()} hab.</p>
      </div>
    </div>
  );
};

export default Card;
