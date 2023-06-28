import { NavLink } from "react-router-dom";
import { Dog } from "phosphor-react";

import styles from "./index.module.css";

export function Header() {
  return (
    <header>
      <NavLink to="/" className={styles.mainTitle}>
        <Dog size={32} color="#cdb4db" />
        <h1 className={styles.title}>Doggy Gallery</h1>
      </NavLink>
      <nav>
        <ul className={styles.menuContainer}>
          <li className={styles.menuItem}>
            <NavLink to="/">Menu 1</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/">Menu 2</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/">Menu 4</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/">Menu 4</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
