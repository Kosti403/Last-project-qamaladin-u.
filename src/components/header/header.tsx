import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  const location = useLocation();
  const isCatalogPath = location.pathname.startsWith("/catalog/product/");

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Logo</div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog/product/category/1"
              className={({ isActive }) =>
                isActive || (isCatalogPath && !isActive)
                  ? styles.active
                  : styles.link
              }
            >
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className={styles.basket}>
          <Link to="/basket">
            <img src="/src/img/png/icons8-корзина-48.png" alt="///" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
