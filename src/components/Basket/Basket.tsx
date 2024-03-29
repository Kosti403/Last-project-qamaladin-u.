import React, { useContext } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./basket.module.css";
import { CartContext } from "../hooks/cart-context";

interface CartItem {
  id: string;
  title: string;
  price: number;
}

const Baskets: React.FC = () => {
  const { cart, getTotalAmount, removeFromCart } = useContext(CartContext);

  return (
    <div className={styles.containerBasket}>
      <Header />
      <div className={styles.wrapperBasket}>
        <h2 className={styles.mainText}>Shopping Cart</h2>
        <div className={styles.tagInformation}>
          <p>Name Product</p>
          <p>Price</p>
          <p style={{ opacity: "0" }}>QUANTITY</p>
        </div>
        {cart.map((product: CartItem) => (
          <div key={product.id} className={styles.cartItem}>
            <p style={{ width: "140px" }}>{product.title}</p>
            <p>${product.price}</p>
            <div className={styles.cartControls}>
              <button
                style={{ color: "blue" }}
                onClick={() => removeFromCart(product.id)}
              >
                <p> Remove </p>
              </button>
            </div>
          </div>
        ))}
        <div className={styles.totalAmount}>
          <p>Total Amount:</p>
          <p>${getTotalAmount()}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Baskets;
