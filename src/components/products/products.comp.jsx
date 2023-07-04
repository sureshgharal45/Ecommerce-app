import React from "react";
import { useSelector } from "react-redux";
import { selectProductsArray } from "../../store/products/product.selector";
import { selectIsSorted } from "../../store/products/product.selector";
import { selectSortedProds } from "../../store/products/product.selector";
import ProductItem from "../product-item/product-item.comp";

const Products = () => {
  const products = useSelector(selectProductsArray);
  const sortedProducts = useSelector(selectSortedProds);
  const isSorted = useSelector(selectIsSorted);
  const productsArray = products.data;

  return (
    <>
      {isSorted
        ? sortedProducts.data.map((product) => (
            <ProductItem product={product} />
          ))
        : productsArray &&
          productsArray.map((product) => <ProductItem product={product} />)}
    </>
  );
};

export default Products;
