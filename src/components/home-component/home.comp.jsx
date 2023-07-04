import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Sort from "../sort/sort.comp";
import "./home.styles.scss";
import { selectIsLoading } from "../../store/products/product.selector";
import { ClipLoader } from "react-spinners";
import Products from "../products/products.comp";
import { getProducts } from "../../utils/fetching/fetchProducts";
// import { getProducts } from "../../utils/fetching/fetchProducts";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const HomeComponent = () => {
  const isLoading = useSelector(selectIsLoading);
  // console.log("isLoading", isLoading);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="home-container">
      <Sort />
      {isLoading ? <ClipLoader className={override} /> : <Products />}
    </div>
  );
};

export default HomeComponent;
