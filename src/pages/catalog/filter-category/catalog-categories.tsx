import { NavLink } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import styles from "./catalog-categories.module.css";
import getCategories from "../../../Api/get-categories";
import { Category } from "../../../entities/entities-keep";
import { Skeleton } from "antd";

type CategoryItemProps = {
  category: Category;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => (
  <div className={styles.CatalogContainer}>
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
);

const CatalogCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getCategories();
      if (response) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className={styles.containerCategory}>
      <div className={styles.categoryWrapper}>
        {loading ? (
          <Skeleton active />
        ) : (
          categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))
        )}
      </div>
    </div>
  );
};

export default CatalogCategories;
