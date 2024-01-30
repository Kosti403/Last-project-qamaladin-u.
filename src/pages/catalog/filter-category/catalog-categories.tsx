import { NavLink } from "react-router-dom";
import getCategories from "../../../Api/get-categories";
import { useState, useEffect } from "react";
import styles from "./catalog-categories.module.css";
import { Category } from "../../../entities/entities-keep";

export function CatalogCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        if (response) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className={styles.containerCategory}>
      <div className={styles.categoryWrapper}>
        {categories.map((category: Category) => (
          <div className={styles.CatalogContainer} key={category.id}>
            <li className={styles.Li}>
              <p>
                <NavLink
                  to={`/catalog/product/category/${category.id}`}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.titleName
                  }
                >
                  {category.name}
                </NavLink>
              </p>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}
