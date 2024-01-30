import { useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import CatalogProducts from "./catalog-elements/catalog-products";
import { CatalogCategories } from "./filter-category/catalog-categories";
import SearchBar from "./search-bar/search-bar";
import styles from "./catalogMain.module.css";

export default function Catalog() {
  const [searchedValue, setSearchedValue] = useState("");
  const onChangeSearchedValue = (value: string) => {
    setSearchedValue(value);
  };

  return (
    <>
      <div className={styles.wrapperCatalog}>
        <Header />
        <div className={styles.container}>
          <SearchBar
            searchedValue={searchedValue}
            onChangeSearchedValue={onChangeSearchedValue}
          />
          <div className={styles.barFilter}>
            <CatalogCategories />

            <CatalogProducts
              searchedValue={searchedValue}
              // priceMin={minPrice}
              // priceMax={maxPrice}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
