import { useEffect, useState } from "react";
import { Category } from "../../../entities/entities-keep";
import { Link } from "react-router-dom";
import styles from "./category.module.css";
import getCategories from "../../../Api/get-categories";

export function CardCategory() {
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
          <div className={styles.CardContainer} key={category.id}>
            <img
              src={category.image}
              style={{
                width: "190px",
                height: "190px",
              }}
            />
            <li className={styles.li}>
              <Link
                to={
                  category.id
                    ? `/catalog/product/category/${category.id}`
                    : "/catalog/product/"
                }
                className={styles.name}
              >
                {category.name}
              </Link>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}
