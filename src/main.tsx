import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Catalog from "./pages/catalog/catalog-page.tsx";
import ErrorPage from "./components/error/touch src/error-page.tsx";
import About from "./pages/about/about.tsx";
import Contact from "./pages/contact/contact.tsx";
import Baskets from "./components/Basket/Basket.tsx";
import ModalProduct from "./components/modal-product/detailing-product.tsx";
import { CartProvider } from "./components/hooks/cart-context.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalog/product/category/:categoryId",
    element: <Catalog />,
  },
  {
    path: "/catalog/product/",
    element: <Catalog />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/basket",
    element: <Baskets />,
  },
  {
    path: "/product/",
    element: <ModalProduct />,
  },
  {
    path: "/product/:productId",
    element: <ModalProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
