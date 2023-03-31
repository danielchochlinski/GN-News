import React from "react";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";
import styles from "./CountryFlag.module.scss";
const countries = [
  { name: "ae" },
  { name: "ar" },
  { name: "at" },
  { name: "au" },
  { name: "be" },
  { name: "bg" },
  { name: "br" },
  { name: "ca" },
  { name: "ch" },
  { name: "cn" },
  { name: "co" },
  { name: "cu" },
  { name: "cz" },
  { name: "de" },
  { name: "eg" },
  { name: "fr" },
  { name: "gb" },
  { name: "gr" },
  { name: "hk" },
  { name: "hu" },
  { name: "id" },
  { name: "ie" },
  { name: "il" },
  { name: "in" },
  { name: "it" },
  { name: "jp" },
  { name: "kr" },
  { name: "lt" },
  { name: "lv" },
  { name: "ma" },
  { name: "mx" },
  { name: "my" },
  { name: "ng" },
  { name: "nl" },
  { name: "no" },
  { name: "nz" },
  { name: "ph" },
  { name: "pl" },
  { name: "pt" },
  { name: "ro" },
  { name: "rs" },
  { name: "ru" },
  { name: "sa" },
  { name: "se" },
  { name: "sg" },
  { name: "si" },
  { name: "sk" },
  { name: "th" },
  { name: "tr" },
  { name: "tw" },
  { name: "ua" },
  { name: "us" },
  { name: "ve" },
  { name: "za" },
];
export const CountryFlags = () => {
  return (
    <div className={styles.container}>
      {countries.map((el) => (
        <Link key={el.name} to={`/news/country/${el.name}`}>
          <div className={styles.flag_container}>
            <div>{el.name}</div>
            <Flag code={el.name.toUpperCase()} width={"60%"} />
          </div>
        </Link>
      ))}
    </div>
  );
};
