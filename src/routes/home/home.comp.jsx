import React, { useEffect } from "react";
import HomeComponent from "../../components/home-component/home.comp";
import { useDispatch } from "react-redux";
import { fetchProductsAsync } from "../../store/products/product.action";

const Home = () => {
  const dispatch = useDispatch();

  //fetching product on application loading
  useEffect(() => {
    const getProducts = async () => {
      dispatch(fetchProductsAsync());
    };
    getProducts();
  }, [dispatch]);
  return <HomeComponent />;
};

export default Home;
