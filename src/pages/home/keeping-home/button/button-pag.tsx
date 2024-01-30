import { useState, useEffect } from "react";
import { TopProduct } from "../pagination/pagination-top-product.tsx";
import { Catalogs } from "../../../../entities/entities-catalog.tsx";
import { GetProductMaine } from "../../../../Api/get-catalogs.ts";

function Button() {
  const [posts, setPosts] = useState<Catalogs[]>([]);

  const [pageNumber, setPageNumber] = useState(0);

  const displayProducts = async (pageNumber: number) => {
    const products = await GetProductMaine(pageNumber);
    setPosts(products);
  };

  useEffect(() => {
    displayProducts(pageNumber);
  }, [pageNumber]);

  const onHandleNextPageNumber = () => {
    if (pageNumber < 10) {
      setPageNumber(pageNumber + 1);
    }
  };

  const onHandlePreviousPageNumber = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };
  return (
    <div className="App">
      <TopProduct
        posts={posts}
        onHandleNextPageNumber={onHandleNextPageNumber}
        onHandlePrevioustPageNumber={onHandlePreviousPageNumber}
      />
    </div>
  );
}

export default Button;
