import React from "react";
import styles from "./DealersPage.module.css";
import { useEffect, useState } from "react";
import { carDealers } from "../../../constants/constants";

export default function DealersPage() {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name", "numericCode"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  // const url = new URL("https://example.com");

  // url.protocol = "http";
  // url.host = "google.com";
  // console.log(url);

  // console.log(url.toString()); // outputs: http://google.com/

  // useEffect(() => {
  //   fetch(
  //     // "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json"
  //     "https://gist.githubusercontent.com/shcyiza/71c64a33f3880e58980003c4c794db38/raw/febb04707f6ccc9ae3a445e147c5754e30f743fe/car_brands.json"
  //     // "https://jsoneditoronline.org/#left=cloud.463e90051ede4bb686c6c17d705d8b7a"
  //   )
  //     .then((res) => res.json())
  //     .then((result) => setItems(result))
  //     .catch((error) => setError(error));
  // }, []);

  // const data = Object.values(items);

  if (error) {
    return <p>{error.message}, Error 404</p>;
  } else {
    return (
      <div>
        <div className={styles.wrapper}>
          <div className={styles.searchWrapper}></div>
          <p className={styles.text}>Ունիվերսալ դիլերներ Հայաստանում</p>
          <ul className={styles.cardGrid}>
            {carDealers.map((item) => (
              <li>
                <article className={styles.card} key={item.alpha3Code}>
                  <div className={styles.cardImage}>
                    <img src={item.logo} alt={item.name} />
                    {/* <img alt="dealer image" /> */}
                  </div>
                  <div className={styles.cardContent}>
                    <p className={styles.cardName}>{item.name}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
