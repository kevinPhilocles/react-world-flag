import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(125);
  const [selectedRadio, setSelectedRadio] = useState("");
  const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <div className="radio-container">
        <div className="progress-bar">
          <input
            type="range"
            className="range"
            min="1"
            max="250"
            defaultValue={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />
          <span className="range-value">{rangeValue}</span>
        </div>
        <div className="continent-list">
          {continents.map((continent, index) => (
            <div className="continent-radio" key={index}>
              <input
                type="radio"
                id={continent}
                name="continentradio"
                checked={continent === selectedRadio}
                onChange={(e) => setSelectedRadio(e.target.id)}
              />
              <label htmlFor={continent}>{continent}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="reset-filter">
        {selectedRadio && (
          <button onClick={() => setSelectedRadio("")}>Réinitialiser</button>
        )}
      </div>
      <div className="countries-list">
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </div>
    </div>
  );
};

export default Countries;
