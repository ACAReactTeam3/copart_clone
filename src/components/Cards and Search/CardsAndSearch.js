import styles from "./CardsAndSearch.module.css";
import React from "react";
import { useEffect, useState } from "react";
import {v4 as uuid} from 'uuid'

function CardsAndSearch() {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name", "numericCode"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  const data = Object.values(items);

  function search(items) {
    return items.filter((item) => {
      if (item.region == filterParam) {
        console.log("filtered");
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        console.log("All");
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  if (error) {
    return <p>{error.message}, Error 404</p>;
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.searchWrapper}>
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className={styles.searchInput}
              placeholder="Search for..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <span className={styles.srOnly}>Search countries here</span>
          </label>

          <div className={styles.select}>
            <select
              onChange={(e) => {
                setFilterParam(e.target.value);
              }}
              className={styles.customSelect}
              aria-label="Filter Countries By Region"
            >
              <option value="All">Filter By Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <span className={styles.focus}></span>
          </div>
        </div>
        <ul className={styles.cardGrid}>
          {search(data).map((item) => (
            <li key={uuid()}>
              <article className={styles.card} key={item.alpha3Code}>
                <div className={styles.cardImage}>
                  <img src={item.flag.large} alt={item.name} />
                </div>
                <div className={styles.cardContent}>
                  <h2 className={styles.cardName}>{item.name}</h2>
                  <ol className={styles.cardList}>
                    <li>
                      Population: <span>{item.population}</span>
                    </li>
                    <li>
                      Region: <span>{item.region}</span>
                    </li>
                    <li>
                      Capital: <span>{item.capital}</span>
                    </li>
                  </ol>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CardsAndSearch;
