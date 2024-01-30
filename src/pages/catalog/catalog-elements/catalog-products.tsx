
import React, { useEffect } from "react";
import { Catalogs } from "../../../entities/entities-catalog";
import { getProductsByCategoryAndFilter } from "../../../Api/get-product-by-category-filter";
import { NavLink, useParams } from "react-router-dom";
import styles from "./category-products.module.css";
import { useCart } from "../../../components/hooks/cart-context";

type CatalogProductsProps = {
  searchedValue: string;
};

const CatalogProducts: React.FC<CatalogProductsProps> = ({ searchedValue }) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { addToCart } = useCart();
  const [categoryProducts, setCategoryProducts] = React.useState<Catalogs[]>(
    []
  );

  useEffect(() => {
    const fetchProductsByCategory = async (
      searchedValue: string,
      categoryId: string
    ) => {
      try {
        const responses = await getProductsByCategoryAndFilter(
          searchedValue,
          categoryId
        );
        setCategoryProducts(responses || []);
      } catch (error) {
        console.error("Failed to fetch products by category", error);
      }
    };

    if (categoryId) {
      fetchProductsByCategory(searchedValue, categoryId);
    }
  }, [searchedValue, categoryId]);

  return (
    <div className={styles.categoryWrapper}>
      <div className={styles.categoryProducts}>
        {categoryProducts.map((product) => (
          <div key={product.id} className={styles.cardProduct}>
            <NavLink to={`/product/${product.id}`}>
              <img
                src={product.images[2]}
                style={{ width: "180px", height: "150px" }}
                alt=""
              />
              <p className={styles.titlePrice}>{product.title}</p>
              <p className={styles.titlePrice}>${product.price}</p>
            </NavLink>
            <div className={styles.cartControls}>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogProducts;
