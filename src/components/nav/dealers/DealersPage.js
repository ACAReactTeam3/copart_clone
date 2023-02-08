import React from "react";
import styles from "./DealersPage.module.css";
import { useEffect, useState } from "react";

export default function DealersPage() {
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
      .then((result) => setItems(result))
      .catch((error) => setError(error));
  }, []);

  const data = Object.values(items);

  if (error) {
    return <p>{error.message}, Error 404</p>;
  } else {
    return (
      <div>
        <div className={styles.wrapper}>
          <div className={styles.searchWrapper}></div>
          <p className={styles.text}>Ունիվերսալ դիլերներ</p>
          <ul className={styles.cardGrid}>
            {data.map((item) => (
              <li>
                <article className={styles.card} key={item.alpha3Code}>
                  <div className={styles.cardImage}>
                    {/* <img src={item.flag.large} alt={item.name} /> */}
                    <img alt="dealer image" />
                  </div>
                  <div className={styles.cardContent}>
                    <p className={styles.cardName}>dealer name</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <p className={styles.text}>Պաշտոնական դիլերներ</p>
        </div>
      </div>
    );
  }
}
