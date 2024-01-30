import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "../footer/footer";
import Header from "../header/header";
import { Catalogs } from "../../entities/entities-catalog";
import GetProduct from "../../Api/get-product";

import styles from "./detailing-product.module.css";

export default function DetailingProduct() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Catalogs>();

  useEffect(() => {
    const fetchProductModal = async (productId: string) => {
      try {
        const response = await GetProduct(productId);
        setProduct(response);
      } catch (error) {
        console.error("Failed to fetch products by category", error);
      }
    };

    if (productId) {
      fetchProductModal(productId);
    }
  }, [productId]);

  return (
    <>
      <div className={styles.ModalWrapper}>
        <Header />
        <div className={styles.containerProduct}>
          <div key={product?.id} className={styles.cardProduct}>
            {[0, 1, 2].map((index) => (
              <img
                key={index}
                src={product?.images[index]}
                style={{ width: "110px", height: "110px" }}
                alt=""
              />
            ))}
          </div>
          <div className={styles.title}>
            <p style={{ color: "white", fontSize: "20px" }}>
              {product?.category.name}
            </p>
            {/* <img
              key={index}
              src={product?.images[index.[1]]}
              alt=""
              style={{ width: "40px", height: "40px" }}
            /> */}
            <p className={styles.titlePrice}>{product?.title}</p>
            <p className={styles.titlePrice}> {product?.description}</p>
            <p className={styles.titlePrice}>${product?.price}</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
