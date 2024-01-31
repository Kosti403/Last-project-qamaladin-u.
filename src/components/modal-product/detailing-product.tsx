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
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    const fetchProductModal = async (productId: string) => {
      try {
        const response = await GetProduct(productId);
        setProduct(response);
        setSelectedImage(response?.images[0]); 
      } catch (error) {
        console.error("Failed to fetch product details", error);
      }
    };

    if (productId) {
      fetchProductModal(productId);
    }
  }, [productId]);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <>
      <div className={styles.ModalWrapper}>
        <Header />
        <div className={styles.containerProduct}>
          <div className={styles.cardProduct}>
            {product?.images.slice(0, 3).map((image, index) => (
              <img
                key={index}
                src={image}
                style={{ width: "110px", height: "110px" }}
                alt={`product-preview-${index}`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
          <div className={styles.bigImageContainer}>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                style={{ width: "300px", height: "300px" }}
              />
            )}
          </div>
          <div className={styles.title}>
            <p className={styles.titlePrice}>{product?.title}</p>
            <p style={{ color: "white", fontSize: "20px" }}>
              {product?.category.name}
            </p>
            <p className={styles.titlePrice}>{product?.description}</p>
            <p className={styles.titlePrice}>${product?.price}</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
